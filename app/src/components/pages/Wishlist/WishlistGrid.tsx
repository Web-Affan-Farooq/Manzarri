"use client";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/stores/useWishlist";
import { Trash2 } from "lucide-react";
import WishlistCard from "./Card";

const WishlistWidget = () => {
  const { wishlist, clearWishlist } = useWishlist();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((item, idx) => (
          <WishlistCard wishlistProduct={item} key={idx} />
        ))}
      </div>
      <div className="pt-[30px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-manzarri-black/20"
          >
            Sort by Date Added
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-manzarri-black/20"
          >
            Sort by Price
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-manzarri-black/60 hover:text-red-600"
          onClick={clearWishlist}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Wishlist
        </Button>
      </div>
    </>
  );
};
export default WishlistWidget;
