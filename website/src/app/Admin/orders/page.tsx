import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
// import OrderCard from './OrderCard';
// import Image from 'next/image';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
import Orders from '@/components/pages/Admin/orders/Orders';

const Admin = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />
      <div className='w-full'>
        <Orders />
      </div>
    </main>
  );
};

export default Admin;