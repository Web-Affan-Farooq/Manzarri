"use client";
import React from 'react';
import { useWishlist } from '@/stores/wishlist';
import WishlistCard from "./Card";

const WishlistSection: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <section className="min-h-screen bg-gray-100 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your wishlist is empty. Start adding your favorite items!
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center items-center gap-6">
          {wishlist.map((item) => (
            <WishlistCard
              key={item._id}
              wishlistProduct={item}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WishlistSection;