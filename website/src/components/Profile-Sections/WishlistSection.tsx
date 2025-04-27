"use client";
import React from 'react';
import Image from 'next/image';
import { useWishlist } from '@/stores/wishlist';

const WishlistCard = ({ image, name, price, id }: { image: string; name: string; price: number; id: number}) => {
  const { addItem, deleteItem } = useWishlist();

  return (
<div className="rounded-2xl flex flex-col items-center w-[200px] bg-white p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <Image 
    src={image} 
    alt={name} 
    width={140} 
    height={140} 
    className="rounded-md mb-4 object-cover" 
  />

  <span className="font-semibold text-gray-800 text-center mb-1">{name}</span>
  <span className="text-gray-500 mb-4">${price}</span>

  <div className="flex flex-col gap-3 w-full">
    <button
      onClick={() => addItem({ id, name, price, image })}
      className="bg-faun-light hover:bg-faun-dark text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300"
    >
      Move to Cart
    </button>

    <button 
      type="button" 
      onClick={() => deleteItem({ id, name, price, image })}
      className="flex justify-center items-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors duration-300"
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  </div>
</div>

  );
};

const WishlistSection = () => {
  const { wishlist } = useWishlist();

  return (
    <section className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your wishlist is empty. Start adding your favorite items!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item, idx: number) => (
            <WishlistCard 
              key={idx} 
              id={item.id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WishlistSection;
