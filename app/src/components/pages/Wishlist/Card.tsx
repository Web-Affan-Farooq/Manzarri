"use client";
import Image from "next/image";
import { Product } from "@/@types/product";
// import { useWishlist } from "@/stores/wishlist";

import React from "react";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WishlistCard = ({ wishlistProduct }: { wishlistProduct: Product }) => {
  // const { removeFromWishlist } = useWishlist();
  return (
    <Card
      className={`group cursor-pointer overflow-hidden border-manzarri-black/10 hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative">
        <Image
          src={wishlistProduct.images[0]}
          alt={wishlistProduct.productName}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="ghost"
            className="w-8 h-8 p-0 bg-manzarri-white/90 hover:bg-manzarri-white"
          >
            <Trash2 className="w-4 h-4 text-red-600" />
          </Button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-manzarri-black mb-2 group-hover:text-manzarri-reddish-brown transition-colors">
          {wishlistProduct.productName}
        </h3>

        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-bold text-manzarri-reddish-brown">
            ${wishlistProduct.price.toLocaleString()}
          </span>
          {wishlistProduct.price}
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1 bg-manzarri-black hover:bg-manzarri-black/90 text-manzarri-white"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Heart className="w-4 h-4 fill-current" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default WishlistCard;
