"use client";
import React from "react";
import Card from "./Card";
import { useOffers } from "@/stores/admin/offer";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const Main = () => {
  const { offers } = useOffers();

  return (
    <main className="p-6">
      <Link href="/Admin/offers/create">
        <Button className="cursor-pointer flex flex-row items-center gap-2 my-5 px-5 py-2 rounded-md bg-gray-900">
          <Plus className="size-5" />
          <span className="text-sm">Create offer</span>
        </Button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <Card key={offer._id} offer={offer} />
        ))}
      </div>
    </main>
  );
};

export default Main;
