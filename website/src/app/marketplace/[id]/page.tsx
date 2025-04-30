"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/stores/cart"; // Assuming your cart logic exists
import { useWishlist } from "@/stores/wishlist";

interface ProductImage {
  color: string;
  images: string[];
}

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    colors: ProductImage[];
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addItem } = useCart();
  const { addItem: addToWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [mainImage, setMainImage] = useState(product.colors[0].images[0]);

  const handleColorChange = (color: string) => {
    const colorVariant = product.colors.find((c) => c.color === color);
    if (colorVariant) {
      setSelectedColor(colorVariant);
      setMainImage(colorVariant.images[0]);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6 sm:p-10 flex flex-col lg:flex-row gap-10">
      {/* Left - Images */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-md aspect-square relative mb-4">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>
        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto">
          {selectedColor.images.map((img, idx) => (
            <div
              key={idx}
              className={`w-20 h-20 relative cursor-pointer rounded-lg border-2 ${
                img === mainImage ? "border-[var(--faun-light)]" : "border-transparent"
              }`}
              onClick={() => setMainImage(img)}
            >
              <Image src={img} alt="thumbnail" fill className="object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Right - Info */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-lg text-gray-700 mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Available Colors:</h3>
          <div className="flex gap-3">
            {product.colors.map((variant, idx) => (
              <button
                key={idx}
                onClick={() => handleColorChange(variant.color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  variant.color === selectedColor.color
                    ? "border-[var(--faun-light)]"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: variant.color }}
                title={variant.color}
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => addItem({ ...product, image: mainImage })}
            className="bg-[var(--faun-light)] hover:bg-[var(--faun-dark)] text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => addToWishlist({ ...product, image: mainImage })}
            className="bg-white border-2 border-[var(--faun-light)] text-[var(--faun-light)] px-6 py-2 rounded-lg font-semibold hover:bg-[var(--faun-light)] hover:text-white transition"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

const ProductDetailsPage = () => {
    return (
        <ProductDetails product={{
            id: 1,
            name: "Elegant Gold Necklace",
            description: "Hand-crafted necklace with 24K gold plating and sapphire stones.",
            price: 249.99,
            colors: [
              {
                color: "#d4af37", // gold
                images: [
                  "/images/earrings/1.jpeg",
                  "/images/earrings/1.jpeg",
                  "/images/earrings/1.jpeg",
                ],
              },
              {
                color: "#c0c0c0", // silver
                images: [
                  "/images/earrings/2.jpeg",
                  "/images/earrings/2.jpeg",
                ],
              },
            ],
          }
          }/>
    )
}
export default ProductDetailsPage;