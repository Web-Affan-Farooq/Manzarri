"use client";
import React from "react";
import Link from "next/link";
import { Heart, Trash2, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useWishlist } from "@/stores/wishlist";
// import { useCart } from "@/stores/cart";
import WishlistCard from "./Card";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  // const { addToCart } = useCart();
  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
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
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-manzarri-black/20"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Wishlist
              </Button>
              <Button
                size="sm"
                className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white"
              >
                Add All to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {wishlist.length > 0 ? (
          <>
            {/* Wishlist Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
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
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Wishlist
              </Button>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((item, idx) => (
                <WishlistCard wishlistProduct={item} key={idx} />
              ))}
            </div>

            {/* Wishlist Summary */}
            <Card className="mt-12 border-manzarri-black/10 bg-gradient-to-r from-manzarri-skin/20 to-manzarri-faun/10">
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-manzarri-black mb-2">
                      Ready to make them yours?
                    </h3>
                    <p className="text-manzarri-black/70">
                      Total wishlist value:{" "}
                      <span className="font-semibold text-manzarri-reddish-brown">
                        ${totalValue.toLocaleString()}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="border-manzarri-reddish-brown text-manzarri-reddish-brown hover:bg-manzarri-reddish-brown hover:text-manzarri-white"
                    >
                      Add Available Items to Cart
                    </Button>
                    <Link href="/marketplace">
                      <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </>
        ) : (
          /* Empty Wishlist */
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-manzarri-black/20 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-manzarri-black mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-manzarri-black/70 mb-8 max-w-md mx-auto">
              Start adding items to your wishlist by clicking the heart icon on
              products you love.
            </p>
            <Link href="/marketplace">
              <Button className="bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                Explore Collection
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
