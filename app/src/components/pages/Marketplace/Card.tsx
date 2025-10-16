"use client";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/@types/product";
import { useWishlist } from "@/stores/wishlist";
import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/stores/cart";

const ProductCard = ({ product }: { product: Product }) => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const existsInWishlist = useMemo(() => {
    return wishlist.find((p) => p._id === product._id);
  }, [product, wishlist]);

  const existsInCart = useMemo(() => {
    return cart.find((p) => p.item._id === product._id);
  }, [product, cart]);

  if (existsInWishlist) {
    return (
      <div className="relative w-full mb-4 break-inside-avoid overflow-hidden rounded-md bg-white">
        <div className="relative w-full">
          <Image
            src={product.images[0]}
            alt={product.productName}
            width={400}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized // optional if the images come from external APIs not in next.config
          />
        </div>

        <div className="absolute top-2 right-2 flex flex-col justify-center items-center gap-[20px]">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
            <Heart className="cursor-pointer fill-current size-4 sm:size-5 stroke-manzarri-reddish-brown" />
          </span>
          <Link href={`/marketplace/${product._id}`} id="details-link">
            <span className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
              <ShoppingCart className="fill-current size-4 sm:size-5 stroke-manzarri-reddish-brown" />
            </span>
          </Link>
        </div>
      </div>
    );
  } else if (existsInCart) {
    return (
      <div className="relative w-full mb-4 break-inside-avoid overflow-hidden rounded-md bg-white">
        <div className="relative w-full">
          <Image
            src={product.images[0]}
            alt={product.productName}
            width={400}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized // optional if the images come from external APIs not in next.config
          />
        </div>

        <div className="absolute top-2 right-2 flex flex-col justify-center items-center gap-[20px]">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
            <Heart className="cursor-pointer size-4 sm:size-5 stroke-manzarri-reddish-brown" />
          </span>
          <Link href={`/marketplace/${product._id}`}>
            <span className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
              <ShoppingCart className="fill-current size-4 sm:size-5 stroke-manzarri-reddish-brown" />
            </span>
          </Link>
        </div>
      </div>
    );
  } else if (existsInCart && existsInCart) {
    return (
      <div className="relative w-full mb-4 break-inside-avoid overflow-hidden rounded-md bg-white">
        <div className="relative w-full">
          <Image
            src={product.images[0]}
            alt={product.productName}
            width={400}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized // optional if the images come from external APIs not in next.config
          />
        </div>

        <div className="absolute top-2 right-2 flex flex-col justify-center items-center gap-[20px]">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
            <Heart className="cursor-pointer fill-current size-4 sm:size-5 stroke-manzarri-reddish-brown" />
          </span>
          <Link href={`/marketplace/${product._id}`}>
            <span className="cursor-pointer fill-current w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
              <ShoppingCart className="fill-current size-4 sm:size-5 stroke-manzarri-reddish-brown" />
            </span>
          </Link>
        </div>
      </div>
    );
  } else if (!existsInCart && !existsInWishlist) {
    return (
      <div className="relative w-full mb-4 break-inside-avoid overflow-hidden rounded-md bg-white">
        <div className="relative w-full">
          <Image
            src={product.images[0]}
            alt={product.productName}
            width={400}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized // optional if the images come from external APIs not in next.config
          />
        </div>

        <div className="absolute top-2 right-2 flex flex-col justify-center items-center gap-[20px]">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
            <Heart className="cursor-pointer size-4 sm:size-5 stroke-manzarri-reddish-brown" />
          </span>
          <Link href={`/marketplace/${product._id}`}>
            <span className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
              <ShoppingCart className="size-4 sm:size-5 stroke-manzarri-reddish-brown" />
            </span>
          </Link>
        </div>
      </div>
    );
  }
};

export default ProductCard;
