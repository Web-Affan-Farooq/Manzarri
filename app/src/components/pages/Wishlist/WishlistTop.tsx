"use client";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/stores/useWishlist";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const WishlistTop = () => {
  const { wishlist } = useWishlist();
  // const { addToCart } = useCart();
  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="bg-manzarri-skin/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/profile">
            <Button
              variant="ghost"
              size="sm"
              className="text-manzarri-black hover:text-manzarri-reddish-brown"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Profile
            </Button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-manzarri-black mb-2">
              My Wishlist
            </h1>
            <p className="text-manzarri-black/70">
              {wishlist.length} items • Total value: $
              {totalValue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishlistTop;
