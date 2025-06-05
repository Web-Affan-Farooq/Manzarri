"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/@types/product";
import { useWishlist } from "@/stores/wishlist";

const Card = ({ wishlistProduct }: { wishlistProduct: Product }) => {
  const { removeFromWishlist } = useWishlist();
  return (
    <div className="flex flex-col sm:flex-row w-full gap-4 border border-gray-300 p-4 rounded-md shadow-sm">
      {/* Product Image */}
      <div className="max-sm:w-[200px] sm:w-[120px] h-[150px] sm:h-[120px] flex-shrink-0">
        <Link href={`/marketplace/${wishlistProduct._id}`}>
          <Image
            src={wishlistProduct.images[0].asset.url}
            alt={wishlistProduct.productName}
            width={120}
            height={120}
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-center w-full">
        {/* Product Name and Delete */}
        <h2
          className="text-base sm:text-lg font-semibold text-gray-800 truncate max-w-[180px] sm:max-w-full"
          title={wishlistProduct.productName}
        >
          {wishlistProduct.productName} ({wishlistProduct.material})
        </h2>

        {/* Price */}
        <div className="flex flex-row flex-nowrap justify-start items-center gap-[20px]">
          <p className="text-green-600 font-semibold text-base mt-1">
            RS {wishlistProduct.price}
          </p>
          <button
            type="button"
            onClick={() => {
              removeFromWishlist(wishlistProduct._id);
            }}
            className="text-black text-sm"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;