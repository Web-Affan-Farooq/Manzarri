// _____ Types ...
import { Offer } from "@/@types/offer";
import OfferSchema from "@/validations/OfferSchema";

// _____ Libraries ...
import { create } from "zustand";
import sanityClient from "@/lib/sanity";
import { toast } from "sonner";
import { z } from "zod";

// _____ Actions ...
import {
  CreateOfferAction,
  DeleteOfferAction,
} from "@/actions/Admin/OfferActions";

// _____ Querries ...
// import { offerQuery } from "@/queries/offers";
import { createJSONStorage, persist } from "zustand/middleware";

const getOffers = async () => {
  // ____ Fetch offers from database ...
  const q = `*[_type == "Offers"]{
    _id,
    _updatedAt,
    discountPercentage,
    offerName,
    offerValidity,
    products,
    promoCode,
    bannerImage,
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
  addOffer: (data: z.infer<typeof OfferSchema>) => void;
  fetchOffers: () => void;
  deleteOffer: (id: string) => void;
}

export const useOffers = create<OfferState>()(
  persist(
    (set) => ({
      offers: [],

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
          };
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
