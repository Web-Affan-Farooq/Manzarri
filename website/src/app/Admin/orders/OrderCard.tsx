"use client";
import React from 'react';

interface OrderCardProps {
  orderId: string;
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
  onView: () => void;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-700',
  shipped: 'bg-blue-100 text-blue-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
};

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  customerName,
  customerEmail,
  totalAmount,
  status,
  date,
  onView,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 mb-4 w-full hover:shadow-lg transition-all">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Order #{orderId}</h3>
        <span className={`text-sm px-3 py-1 rounded-full font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="text-gray-600 text-sm space-y-1">
        <p><strong>Customer:</strong> {customerName}</p>
        <p><strong>Email:</strong> {customerEmail}</p>
        <p><strong>Total:</strong> ${totalAmount.toFixed(2)}</p>
        <p><strong>Date:</strong> {date}</p>
      </div>
      <div className="mt-4 text-right">
        <button
          onClick={onView}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-xl transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
