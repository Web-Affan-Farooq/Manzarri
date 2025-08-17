"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/stores/cart';

const Checkout_success = () => {
  const {clearCart} = useCart();
  useEffect(() =>{
    clearCart();
  },[clearCart]);
  
  return (
    <section className='px-[30px] py-[150px] h-[70vh] text-center'>
      {/* ______ Heading for checkout ... */}
      <h1 className='font-bold text-faun-dark font-rye text-[30px]'>Checkout successfull</h1>
      {/* ______ Short paragraph ... */}
      <p className='text-gray-500 text-[15px] w-[80vw]'>You{"'"}ll recieve notifications in your account about your order status and estimated delivery time</p>
      {/* ______ Navigation button  ... */}
      <Link href={"/profile"}>
        <button className="cursor-pointer mt-6 bg-faun-light hover:bg-faun-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-[16px] ">
          <span>Check account</span> &nbsp; &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </section>
  )
}

export default Checkout_success