"use client";
import Image from "next/image";
import { useCart } from "@/stores/cart";
import { useWishlist } from "@/stores/wishlist";

const ProductCard = ({ id, name, price, image }: any) => {
    const { addItem: addToCart } = useCart();
    const { addItem: addToWishlist } = useWishlist();
  
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          className="object-cover rounded-lg mb-4"
        />
  
        <div className="text-center w-full">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 mb-3">${price}</p>
        </div>
  
        <div className="flex gap-2 w-full">
          <button
            onClick={() => addToCart({ id, name, price, image })}
            className="flex-1 bg-[var(--faun-light)] hover:bg-[var(--faun-dark)] text-white text-sm py-2 rounded-lg transition"
          >
            Add to Cart
          </button>
  
          <button
            onClick={() => addToWishlist({ id, name, price, image })}
            className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg flex items-center justify-center transition"
            aria-label="Add to Wishlist"
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    );
  };

  export default ProductCard;