"use client";

import { useEffect, useState } from "react";
import { Tag, Copy, Calendar, Package } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { Offer } from "@/@types/offer";

const Card = ({ offer }: { offer: Offer }) => {
  const [validity, setValidity] = useState<string>("");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(offer.promoCode);
    toast.success("Promo code copied!");
  };

  useEffect(() => {
    // Format date only after mounting to avoid hydration issues
    setValidity(new Date(offer.offerValidity).toLocaleDateString());
  }, [offer.offerValidity]);

  return (
    <Link href={`/Admin/offers/${offer._id}`} className="cursor-pointer">
      <div className="relative bg-gray-900 rounded-xl p-4 border border-gray-800 hover:border-purple-600/50 transition-all duration-300">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-bold text-[16px] text-white tracking-tight">
            {offer.offerName}
          </h2>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 bg-purple-600/20 hover:bg-purple-600/30 
                     text-purple-400 text-xs font-medium rounded-md px-2 py-[2px] transition"
          >
            <Copy size={12} />
            {offer.promoCode}
          </button>
        </div>

        <p className="flex items-center gap-1 text-sm text-gray-400">
          <Tag size={14} /> {offer.discountPercentage}% off
        </p>

        <p className="flex items-center gap-1 text-sm text-gray-400 mt-1">
          <Package size={14} /> {offer.products.length} products
        </p>

        <p className="flex items-center gap-1 text-sm text-gray-400 mt-1">
          <Calendar size={14} /> Valid till{" "}
          <span className="text-blue-500 ml-1">{validity || "..."}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
