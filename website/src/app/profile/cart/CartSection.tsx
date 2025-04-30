"use client";
import React from 'react';
import Image from 'next/image';
import { useCart } from '@/stores/cart';


interface CartItem {
  id: number;    
  image:string;
  name: string;
  price: number;
}


const Card = ({ id, image, name, price }: CartItem) => {
  const { deleteItem } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col w-[180px] hover:shadow-lg transition-shadow duration-300
    max-sm:w-[160px]">
      <Image
        src={image}
        alt={name}
        width={180}
        height={180}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{name}</h3>
        <div className='flex flex-nowrap justify-between items-center'>
          <p className="text-blue-600 font-bold text-md">${price}</p>
          <i className="fa-solid fa-trash" onClick={() => {
            deleteItem({ id: id, name: name, image: image, price: price })
          }}></i>
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ cart }: { cart: CartItem[] }) => {
  return (
    <>
      <br /><br /><br />
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Cart Summary</h1>

      <div className="border-2 border-gray-300 bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto flex flex-col gap-4">
        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Total Items:</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Total Price:</span>
          <span>
            ${cart.reduce((total: number, item: CartItem) => total + item.price, 0)}
          </span>
        </div>

        <button className="mt-6 bg-faun-light hover:bg-faun-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-[16px] ">
          <span>Proceed to checkout</span> &nbsp; &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </>
  )
}


const CartSection = () => {
  const { cart} = useCart();

  return (
    <section className="h-[100vh] overflow-y-scroll flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <div className="flex flex-row flex-wrap justify-start items-center gap-6 max-[500px]:grid max-[500px]:grid-cols-2 ">
        {cart.map((cartitem:CartItem, idx: number) => {
          return <Card image={"/images/earrings/1.jpeg"} id={cartitem.id} price={cartitem.price} name={cartitem.name} key={idx} />
        })}

      </div>
      <br /><br /><br />

      <CartSummary cart={cart} />

    </section>
  );
};

export default CartSection;