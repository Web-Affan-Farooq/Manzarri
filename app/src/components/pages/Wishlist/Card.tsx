"use client";
import { useWishlist } from "@/stores/wishlist";
import Image from "next/image";
import { Product } from "@/@types/product";
// import { useWishlist } from "@/stores/wishlist";

import React, { useState } from "react";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/stores/cart";
import { v4 } from "uuid";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const WishlistCard = ({ wishlistProduct }: { wishlistProduct: Product }) => {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [size, setsize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  return (
    <Card
      className={`group cursor-pointer overflow-hidden border-manzarri-black/10 hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative">
        <Image
          src={wishlistProduct.images[0]}
          alt={wishlistProduct.productName}
          width={400}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="ghost"
            className="w-8 h-8 p-0 bg-manzarri-white/90 hover:bg-manzarri-white"
            onClick={() => removeFromWishlist(wishlistProduct._id)}
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
          <AlertDialog>
            <AlertDialogTrigger className=" px-[20px] py-[5px] rounded-md flex flex-row flex-nowrap justify-center items-center bg-manzarri-black hover:bg-manzarri-black/90 text-manzarri-white">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Move to cart</AlertDialogTitle>
                <AlertDialogDescription className="hidden">
                  You're going to add this product to your cart
                </AlertDialogDescription>
              </AlertDialogHeader>
              <form className="flex flex-col flex-nowrap gap-[20px]">
                {/* ___ for size selection ... */}
                <div>
                  <label htmlFor="Select size" className="text-sm">
                    Select size
                  </label>
                  <div className="flex flex-row flex-wrap justify-between items-center gap-[10px]">
                    <div>
                      {wishlistProduct.availableSizes.map(
                        (IndivisualSize, idx) => {
                          return (
                            <span
                              className={`text-sm cursor-pointer rounded-xl py-[1px] px-3 ${size === IndivisualSize ? "bg-manzarri-reddish-brown text-white" : ""}`}
                              onClick={() => {
                                setsize(IndivisualSize);
                              }}
                              key={idx}
                            >
                              {IndivisualSize}
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                {/* ___ for quantity selection ... */}
                <div>
                  <label htmlFor="Select size" className="text-sm">
                    Select quantity
                  </label>

                  <div className="w-[80px] border-gray-400 border-solid flex flex-row justify-between items-center rounded-md font-bold px-[5px] text-white ">
                    <span
                      className="rounded-full text-center text-md cursor-pointer bg-manzarri-reddish-brown w-[25px] h-[25px]"
                      onClick={() => {
                        if (quantity < wishlistProduct.stockQuantity) {
                          setQuantity(quantity + 1);
                        } else {
                          toast.error("More quantity not available");
                        }
                      }}
                    >
                      +
                    </span>
                    <span className="text-[20px] text-black">{quantity}</span>
                    <span
                      className="text-center rounded-full text-md cursor-pointer bg-manzarri-reddish-brown w-[25px] h-[25px]"
                      onClick={() => {
                        if (quantity > 0) {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      -
                    </span>
                  </div>
                </div>
              </form>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    const data = {
                      id: v4(),
                      quantity: quantity,
                      size: size,
                      item: wishlistProduct,
                    };
                    console.log("Moving to cart : ", data);
                    addToCart(data);
                    setsize("");
                    setQuantity(0);
                    removeFromWishlist(wishlistProduct._id);
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
