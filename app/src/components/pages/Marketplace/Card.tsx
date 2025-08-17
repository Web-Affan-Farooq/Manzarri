"use client";
import React from 'react';
import Image from 'next/image';
import { Product } from '@/@types/product';
import { useWishlist } from '@/stores/wishlist';
import toast from 'react-hot-toast';

const ProductCard = ({
  product
}: {
  product:Product,
}) => {
  const {addToWishlist} = useWishlist();
  return (
    <div className="rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] bg-white">
      {/* Image with hover zoom effect */}
      <div className="overflow-hidden">
        <Image
          src={product.images[0].asset.url}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-sm:h-[150px] rounded-md h-[250px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <h2
          className="font-lato font-bold text-[18px] sm:text-[20px] md:text-[22px] text-gray-800 truncate"
        >
          {product.productName}
        </h2>

        {/* Price + Heart */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-[18px] text-faun-light font-semibold">
            $ {product.price.toLocaleString()}
          </span>

          <button
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200"
            aria-label="Add to Wishlist"
            onClick={() => {
              addToWishlist(product);
              toast.success(`${product.productName} Added to wishlist`)
            }}
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;