import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { OrdersSection } from '@/components/pages/Admin';
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
const Admin = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />
      <div className='w-full'>
        <OrdersSection/>
      </div>
    </main>
  );
};

export default Admin;