// _____ Types ...
import { Offer } from "@/@types/offer";
import OfferSchema from "@/validations/OfferSchema";
import { UpdatedOfferData } from "@/validations/EditOfferSchema";

// _____ Libraries ...
import { create } from "zustand";
import sanityClient from "@/lib/sanity";

// _____ Actions ...
import {
  CreateOfferAction,
  EditOfferAction,
  DeleteOfferAction,
  EditOfferBannerAction,
} from "@/actions/Admin/OfferAction";

// _____ Libraries...
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";
import { z } from "zod";

const getOffers = async () => {
  // ____ Fetch offers from database ...
  const q = `*[_type == "Offers"]{
    _id,
    _updatedAt,
      "assetId":bannerImage.asset._ref,
    discountPercentage,
    offerName,
    offerValidity,
    products,
    promoCode,
    isActive,
    engagementCount,
    offerDescription,
    "bannerImage":bannerImage.asset->url,
  }`;

  try {
    const response = await sanityClient.fetch(q);
    return response;
  } catch (error) {
    console.log(error);
    toast.error("An error occured");
  }
};

interface OfferState {
  offers: Offer[];
  currentOffer?: Offer;
  setCurrentOffer: (offer: Offer) => void;
  addOffer: (data: z.infer<typeof OfferSchema>) => void;
  fetchOffers: () => void;
  editOffer: (id: string, offer: UpdatedOfferData) => void;
  updateBanner: (id: string, assetId: string, image: File) => void;
  deleteOffer: (id: string) => void;
}

export const useOffers = create<OfferState>()(
  persist(
    (set, get) => ({
      offers: [],
      currentOffer: undefined,

      setCurrentOffer: (offer) =>
        set({
          currentOffer: offer,
        }),

      // _____ Call this function for creating a new offer ...
      addOffer: async (data: z.infer<typeof OfferSchema>) => {
        // _____ Call server action ...
        const response = await CreateOfferAction(data);

        if (!response.success || !response.offer) {
          toast.error(response.message);
        }
        // _____ Create new offer ...
        if (response.offer) {
          const newOffer = {
            offerName: data.offerName,
            offerValidity: data.offerValidity,
            products: data.products,
            promoCode: data.promoCode,
            discountPercentage: data.discountPercentage,
            _id: response.offer._id,
            _updatedAt: response.offer._updatedAt,
            bannerImage: response.offer.bannerImage,
            assetId: response.offer.assetId,
            isActive: true,
            engagementCount: response.offer.engagementCount,
            offerDescription:response.offer.offerDescription
          };
          toast.success(response.message);
          console.log("Adding new offer : ", newOffer);
          set((state) => ({
            offers: [...state.offers, newOffer],
          }));
        }
      },

      // _____ Call this function for refreshing state ...
      fetchOffers: async () => {
        return set({
          offers: await getOffers(),
        });
      },

      editOffer: async (id, data) => {
        const { offers } = get();
        const { success, message, offer } = await EditOfferAction(id, data);

        if (!success) {
          toast.error(message);
        }
        if (offer) {
          const updatedList = offers.map((ofr) => {
            if (ofr._id === id) {
              return { ...offer, bannerImage: ofr.bannerImage };
            }
            return ofr;
          });
          toast.success(message);
          return set(() => ({
            offers: updatedList,
          }));
        }
      },
      updateBanner: async (id, assetId, image) => {
        const { offers } = get();
        const requiredOffer = offers.find((o) => o._id === id);
        const { message, success, url } = await EditOfferBannerAction(
          id,
          assetId,
          image
        );
        if (!success || !url || !requiredOffer) {
          toast.error(message);
        }
        if (requiredOffer && url) {
          requiredOffer.bannerImage = url;
          const remainingList = offers.filter((o) => o._id !== id);

          toast.success(message);
          return set({
            offers: [...remainingList, requiredOffer],
          });
        }
      },

      // _____ Call this function for deleting offer...
      deleteOffer: async (id) => {
        // _____ Call server action ...
        const { success, message } = await DeleteOfferAction(id);
        if (!success) {
          toast.error(message);
        }
        // _____ Show message and update the state  ...
        toast.success(message);
        return set((state) => ({
          offers: state.offers.filter((offer) => offer._id !== id),
        }));
      },
    }),
    {
      name: "offers-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
