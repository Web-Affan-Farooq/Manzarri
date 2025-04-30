"use client";

import React from 'react';

/* Child components */
import SearchBar from './Marketplace/Searchbar';
import Tags from './Marketplace/Tags';
import ProductCard from './Marketplace/Card';

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

const MarketplaceSection = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <br /><br /><br /><br /><br />
      <h1 className="text-4xl font-rye font-bold mb-8 text-gray-800 text-center">
        Explore Our Collection
      </h1>
      <br />
      <br />

      <SearchBar />
      <br />
      <br />
      <br />
      <Tags tags={[
        {
          name: "Earrings",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Bracelets",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Necklace",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Hair jewellery",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Nose jewellery",
          image: "/images/earrings/1.jpeg",
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
