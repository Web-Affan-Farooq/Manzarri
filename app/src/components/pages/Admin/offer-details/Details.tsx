"use client";

// _____ Types and schemas  ...
import { Offer } from "@/@types/offer";
// _____ Libraries ...
import { toast } from "sonner";

// ____ Components ...
import { Copy, Calendar, Tag, Users } from "lucide-react";
import { DeleteOffer } from "./DeleteOffer";
import { EditDetails } from "./EditDetails";

const Details = ({ offer }: { offer: Offer }) => {
  // ____ for copying promocode to clipboard ...
  const handleCopy = async () => {
    await navigator.clipboard.writeText(offer!.promoCode);
    toast.success("Promo code copied!");
  };

  return (
    <>
      <div className="flex flex-row flex-nowrap items-center gap-[20px] mt-[19px] mb-[30px] p-3">
        <h1 className="text-xl font-bold">{offer.offerName}</h1>
        <div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 bg-purple-600/20 hover:bg-purple-600/30 
                             text-purple-400 text-xs font-medium rounded-md px-2 py-[2px] transition"
          >
            <Copy size={12} />
            {offer.promoCode}
          </button>
        </div>
      </div>

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
        <div className="flex flex-row flex-nowrap items-center gap-[10px]">
          <div className="flex justify-center items-center p-3 rounded-md bg-gray-900">
            <Users className="size-4 stroke-blue-600" />
          </div>
          <h2 className="text-sm text-gray-500 ">
            User engagement : {offer.engagementCount}
          </h2>
        </div>
        <div className="flex flex-row flex-nowrap items-center gap-[10px]">
          <EditDetails offer={offer} />
          <DeleteOffer id={offer._id} />
        </div>
      </div>
    </>
  );
};
export default Details;
