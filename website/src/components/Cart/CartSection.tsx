"use client";

import React from 'react';
import { useCart } from '@/stores/cart';
import { useCartVisibilityStatus } from '@/stores/cart-status';

const CartSection = () => {
    const {cart, deleteItem} = useCart();
    const {status, toogleStatus} = useCartVisibilityStatus();

    const handleToogle = () => toogleStatus();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className={`fixed right-0 top-0 z-20 transition-all duration-200 ease-in-out ${status? "translate-x-0": "translate-x-[100%]"} py-[100px] px-[50px] md:w-[40vw] h-auto min-h-screen bg-[var(--faun-light)] flex flex-col items-center font-lato`}>
      <div className='absolute top-6 right-16 text-[24px] text-white' onClick={handleToogle}>
      <i className="fa-solid fa-xmark"></i>
      </div>
      <h1 className="text-white text-[35px] font-bold font-rye mb-[50px] max-md:text-[30px] max-sm:text-[24px]">
        Your Shopping Cart
      </h1>

      {cart.length > 0 ? (
        <div className="w-[90%] max-w-[700px] bg-white p-[30px] rounded-[10px] shadow-md">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-[20px]">
              <div className="text-[20px] font-semibold">{item.name}</div>
              <div className="flex items-center gap-[10px]">
                <span className="text-[18px]">${item.price}</span>
                <button 
                  onClick={() => {
                    deleteItem(item)
                  }}
                  className="bg-red-500 text-white px-[15px] py-[5px] rounded-[5px] hover:bg-red-600 transition">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr className="my-[20px]" />

          <div className="flex justify-between items-center text-[22px] font-bold">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>

          <button 
            className="mt-[30px] w-full bg-black text-white font-rye text-[20px] px-[30px] py-[10px] rounded-[10px] hover:bg-gray-800 transition">
            Checkout
          </button>
        </div>
      ) : (
        <div className="text-white text-[24px] font-semibold mt-[50px]">
          Your cart is empty 🛒
        </div>
      )}
    </section>
  );
};

export default CartSection;