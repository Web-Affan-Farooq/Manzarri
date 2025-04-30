"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useWishlist } from '@/stores/wishlist';
import { useCart } from '@/stores/cart';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Elegant Diamond Ring",
    price: 129.99,
    image: "/products/diamond-ring.jpg",
  },
  {
    id: 2,
    name: "Gold Plated Necklace",
    price: 89.50,
    image: "/products/gold-necklace.jpg",
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: 49.99,
    image: "/products/pearl-earrings.jpg",
  },
  {
    id: 4,
    name: "Sapphire Bracelet",
    price: 149.00,
    image: "/products/sapphire-bracelet.jpg",
  },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-md focus-within:border-[var(--faun-light)] transition-all"
    >
      <input
        type="text"
        placeholder="Search for jewelry..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-5 py-2 text-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-[var(--faun-light)] hover:bg-[var(--faun-dark)] text-white px-4 py-2 transition-all"
      >
        <i className="fa-solid fa-search"></i>
      </button>
    </form>
  );
};

const ProductCard = ({ id, name, price, image }: Product) => {
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

const Tags = ({ tags }: { tags: { name: string, image: string }[] }) => {
  return (
    <div className='flex flex-row flex-nowrap justify-start items-center gap-[20px]'>
      {
        tags.map((tag, idx) => {
          return <div className='border border-solid border-gray-400 rounded-2xl py-[5px] px-[12px] flex flex-row flex-nowrap justiy-start items-center gap-[10px]' key={idx}>
            <Image src={tag.image} alt={tag.name} width={30} height={30} className='rounded-full' />
            <span>{tag.name}</span>
          </div>
        })
      }
    </div>
  )
}
const MarketplaceSection = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <br /><br /><br /><br /><br />
      <h1 className="text-4xl font-rye font-bold mb-8 text-gray-800 text-center">
        Explore Our Collection
      </h1>

      <SearchBar />
      <br />
      <Tags tags={[
        {
          name: "Earrings",
          image: "/images/earrings/1.jpeg"
        },
        {
          name: "Bracelets",
          image: "/images/earrings/1.jpeg"
        },
        {
          name: "Necklace",
          image: "/images/earrings/1.jpeg"
        },
        {
          name: "Hair jewellery",
          image: "/images/earrings/1.jpeg"
        },
        {
          name: "Nose jewellery",
          image: "/images/earrings/1.jpeg"
        }]} />

      <br />
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default MarketplaceSection;
