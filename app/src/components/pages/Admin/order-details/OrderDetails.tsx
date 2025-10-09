"use client";

import React from "react";
import { useOrderDetails } from "@/components/hooks";
import { Package, User } from "lucide-react";
import { toast } from "sonner";

const CopyField = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) => {
  if (!value) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    toast.success(`${label} copied!`);
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center gap-3 cursor-pointer hover:bg-gray-800/40 p-2 rounded-lg transition"
    >
      <div className="flex justify-center items-center p-3 rounded-md bg-gray-900">
        {icon}
      </div>
      <div className="bg-gray-800/90 px-4 py-2 rounded-md truncate w-[200px] text-sm">
        {value}
      </div>
    </div>
  );
};

const OrderDetails = ({ id }: { id: string }) => {
  const { order } = useOrderDetails(id);

  if (!order) {
    return (
      <div className="p-4 text-gray-400 italic">Loading order details...</div>
    );
  }

  return (
    <section className="p-3 space-y-5">
      <h2 className="font-semibold text-lg mb-2">Details</h2>

      <div className="grid md:grid-cols-2 gap-5">
        <CopyField
          icon={<Package className="size-4 stroke-blue-600" />}
          label="Order ID"
          value={order._id}
        />

        <CopyField
          icon={<User className="size-4 stroke-blue-600" />}
          label="User ID"
          value={order.userId}
        />
      </div>
    </section>
  );
};

export default OrderDetails;
