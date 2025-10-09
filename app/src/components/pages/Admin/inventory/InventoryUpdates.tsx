"use client";
import React from "react";
import Link from "next/link";
import useInventory from "@/stores/admin/inventory";

const InventoryUpdates = () => {
  const { inventory } = useInventory();
  return (
    <div className="p-5 flex flex-col gap-[10px]">
      <p>
        <span className="text-blue-600">{inventory.length}</span> products in
        stock
      </p>
      <p>
        Manage full inventory on{" "}
        <Link
          href={"https://manzarri-sanity.vercel.app/"}
          target={"_blank"}
          className="text-blue-500"
        >
          Sanity studio
        </Link>
      </p>
    </div>
  );
};

export default InventoryUpdates;
