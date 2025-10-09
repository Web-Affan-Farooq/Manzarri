"use client";

import { AdminPanelSidebar } from "@/components/layout";
import { ProductCard } from "@/components/pages/Admin/offer-details";
import useInventory from "@/stores/admin/inventory";
import { useOffers } from "@/stores/admin/offer";
import { Calendar, Copy, Tag } from "lucide-react";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { toast } from "sonner";
import { Offer } from "@/@types/offer";

const Details = ({ offer }: { offer: Offer }) => {
  return (
    <div className="p-3 grid md:grid-cols-2 gap-[20px]">
      <div className="flex flex-row flex-nowrap items-center gap-[10px]">
        <div className="flex justify-center items-center p-3 rounded-md bg-gray-900">
          <Tag className="size-4 stroke-blue-600" />
        </div>
        <h2 className="text-sm text-gray-500 ">
          Discount percentage : {offer.discountPercentage}
        </h2>
      </div>

      <div className="flex flex-row flex-nowrap items-center gap-[10px]">
        <div className="flex justify-center items-center p-3 rounded-md bg-gray-900">
          <Calendar className="size-4 stroke-blue-600" />
        </div>
        <h2 className="text-sm text-gray-500 ">
          Updated at : {new Date(offer._updatedAt).toLocaleString()}
        </h2>
      </div>

      <div className="flex flex-row flex-nowrap items-center gap-[10px]">
        <div className="flex justify-center items-center p-3 rounded-md bg-gray-900">
          <Calendar className="size-4 stroke-blue-600" />
        </div>
        <h2 className="text-sm text-gray-500 ">
          Valid till : {new Date(offer.offerValidity).toLocaleDateString()}
        </h2>
      </div>
    </div>
  );
};

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

  // ____ for copying promocode to clipboard ...
  const handleCopy = async () => {
    await navigator.clipboard.writeText(requiredOffer!.promoCode);
    toast.success("Promo code copied!");
  };

  if (!requiredOffer) {
    return <div>Offer not found</div>;
  }

  return (
    <>
      <main className="flex min-h-screen bg-black text-white">
        <AdminPanelSidebar />
        <div className="w-full p-5 h-[100vh] overflow-y-auto gray-scroller">
          <div className="flex flex-row flex-nowrap items-center gap-[20px] mt-[19px] mb-[30px] p-3">
            <h1 className="text-xl font-bold">{requiredOffer.offerName}</h1>
            <div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 bg-purple-600/20 hover:bg-purple-600/30 
                     text-purple-400 text-xs font-medium rounded-md px-2 py-[2px] transition"
              >
                <Copy size={12} />
                {requiredOffer.promoCode}
              </button>
            </div>
          </div>
          <Details offer={requiredOffer} />
          <h2 className="font-bold text-[18px] p-3">
            {requiredOffer.products.length} Products in offer
          </h2>
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
