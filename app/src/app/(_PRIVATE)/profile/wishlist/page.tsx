"use client";
import { useWishlist } from "@/stores/useWishlist";
import {
  EmptyWishlist,
  WishlistCTA,
  WishlistGrid,
  WishlistTop,
} from "@/components/pages/Wishlist";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <WishlistTop />

      <div className="container mx-auto px-4 py-8">
        {wishlist.length > 0 ? (
          <>
            {/* ____ Main wishlist ... */}
            <WishlistGrid />
            {/* Wishlist Summary */}
            <WishlistCTA />
          </>
        ) : (
          /* Empty Wishlist */
          <EmptyWishlist />
        )}
      </div>
    </div>
  );
}
