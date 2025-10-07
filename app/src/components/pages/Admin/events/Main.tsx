"use client";
import React from "react";
import CreateEvent from "./CreateEvent";
import Card from "./Card";

interface Offer {
  _id: string;
  _createdAt: string;
  discountPercentage: number;
  offerName: string;
  offerValidity: string;
  products: string[];
  promoCode: string;
}

const Main = () => {
  const offers: Offer[] = [
    {
      _id: "1",
      _createdAt: "2025-10-07T17:32:59Z",
      discountPercentage: 10,
      offerName: "Example offer 1",
      offerValidity: "2025-10-08",
      products: ["187f2d0c", "44fe2acf", "50fe87dd"],
      promoCode: "SAVE10",
    },
    {
      _id: "2",
      _createdAt: "2025-10-07T17:32:59Z",
      discountPercentage: 20,
      offerName: "Autumn Sale",
      offerValidity: "2025-10-20",
      products: ["abc123", "def456", "ghi789"],
      promoCode: "AUTUMN20",
    },
    {
      _id: "3",
      _createdAt: "2025-10-07T17:32:59Z",
      discountPercentage: 15,
      offerName: "New Arrivals",
      offerValidity: "2025-10-15",
      products: ["xyz987", "lmn654"],
      promoCode: "NEW15",
    },
  ];

  return (
    <main className="p-6">
      <CreateEvent />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <Card key={offer._id} offer={offer} />
        ))}
      </div>
    </main>
  );
};

export default Main;
