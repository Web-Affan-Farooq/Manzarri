"use client";
/* _____ Hooks ... */
import { useCart } from "@/stores/cart";
import { useEffect, useState } from "react";

/* _____ Types ... */
import { CartProduct } from "@/@types/cart";

/* _____ Components ... */
import Link from "next/link";
import Image from "next/image";

/**
 * 
 * @param {cartProduct}
 */

const Card = ({ cartProduct }: { cartProduct: CartProduct }) => {

  // Extract cart functions from context
  const { updateQuantity, removeFromCart } = useCart();

  // State to track if quantity update was triggered
  const [isCountUpdated, setIsCountUpdated] = useState(false);

  // Local state for item count
  const [count, setCount] = useState(cartProduct.quantity);

  // Effect: Runs only when 'isCountUpdated' becomes true
  useEffect(() => {
    if (isCountUpdated) {
      updateQuantity({
        id: cartProduct.id,
        item: cartProduct.item,
        quantity: count,
        size: cartProduct.size,
      });

      // Reset the flag after updating
      setIsCountUpdated(false);
    }
  }, [
    isCountUpdated,
    cartProduct.id,
    cartProduct.item,
    cartProduct.size,
    count,
    updateQuantity,
  ]);


  return (
    <div className="flex flex-col sm:flex-row w-full gap-4 border border-gray-300 p-4 rounded-md shadow-sm">
      {/* Product Image */}
      <div className="max-sm:w-[200px] sm:w-[120px] h-[150px] sm:h-[120px] flex-shrink-0">
        <Link href={`/marketplace/${cartProduct.item._id}`}>
          <Image
            src={cartProduct.item.images[0].asset.url}
            alt={cartProduct.item.productName}
            width={120}
            height={120}
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between w-full">
        {/* Product Name and Delete */}
        <div className="flex justify-between items-start">
          <h2
            className="text-base sm:text-lg font-semibold text-gray-800 truncate max-w-[180px] sm:max-w-full"
            title={cartProduct.item.productName}
          >
            {cartProduct.item.productName} ({cartProduct.item.material})
          </h2>
          <button
            type="button"
            onClick={() => removeFromCart(cartProduct.id)}
            className="text-black max-sm:hidden text-sm"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>

        {/* Quantity */}
        <div className="flex flex-row flex-wrap justify-start items-center gap-[30px] max-[450px]:gap-[10px]">
          <div className="flex flex-row flex-nowrap gap-[10px] items-center text-sm text-gray-500 mt-1">
            <span> Quantity: {cartProduct.quantity}</span>
            <div>
              <button type="button" className="bg-black text-white w-[20px] h-[20px] rounded-full font-bold" onClick={() => {
                setCount(count + 1);
                setIsCountUpdated(true);
              }}>+</button>
              <button type="button" className="bg-black text-white w-[20px] h-[20px] rounded-full font-bold ml-[5px]" onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                  setIsCountUpdated(true);
                }
              }}>-</button>
            </div>
          </div>
          <span className={`bg-black text-white rounded-full py-1 px-3 `}>{cartProduct.size}</span>
        </div>

        {/* Price */}
        <div className="flex flex-row flex-nowrap justify-start items-center gap-[20px]">
          <p className="text-green-600 font-semibold text-base mt-1">
            $ {cartProduct.item.price}
          </p>
          <button
            type="button"
            onClick={() => removeFromCart(cartProduct.id)}
            className="text-black max-sm:block hidden text-sm"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;