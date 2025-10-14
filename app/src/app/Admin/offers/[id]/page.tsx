"use client";

// _____ Components ...
import { AdminPanelSidebar } from "@/components/layout";
import {
  OfferDetails,
  ProductCard,
} from "@/components/pages/Admin/offer-details";

// ____ Hooks ...
import useInventory from "@/stores/admin/inventory";
import { useOffers } from "@/stores/admin/offer";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { EditOfferProducts } from "@/components/pages/Admin/offer-details/EditProducts";
import Image from "next/image";
import { EditOfferBanner } from "@/components/pages/Admin/offer-details/EditBanner";

const EventDetails = () => {
  const { id } = useParams();
  const { inventory } = useInventory();
  const { offers } = useOffers();

  // ____ Find the offer for showing details  ...
  const requiredOffer = useMemo(() => {
    return offers.find((offer) => offer._id === id);
  }, [offers, id]);

  // ____ Get all prooducts in which offer is available ...
  const productsInOffer = useMemo(() => {
    return inventory.filter((product) =>
      requiredOffer!.products.includes(product._id)
    );
  }, [inventory, requiredOffer]);

  if (!requiredOffer) {
    return <div>Offer not found</div>;
  }

  return (
    <>
      <main className="flex min-h-screen bg-black text-white">
        <AdminPanelSidebar />
        <div className="w-full p-5 h-[100vh] overflow-y-auto gray-scroller">
          <OfferDetails offer={requiredOffer} />
          <h2 className="font-bold text-[18px] p-3">Banner image</h2>
          <div className="flex flex-row flex-wrap gap-[30px]">
            <Image
              src={requiredOffer.bannerImage}
              alt={requiredOffer.offerName}
              width={400}
              height={400}
              className="w-[300px] h-[200px] rounded-lg"
            />
            <div>
              <EditOfferBanner
                offerId={requiredOffer._id}
                assetId={requiredOffer.assetId}
                image={requiredOffer.bannerImage}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-bold text-[18px] p-3">
              {requiredOffer.products.length} Products in offer
            </h2>
            <EditOfferProducts
              offerId={requiredOffer._id}
              products={requiredOffer.products}
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            {productsInOffer.map((product, idx) => (
              <ProductCard
                product={product}
                key={idx}
                discountPercentage={requiredOffer.discountPercentage}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default EventDetails;
