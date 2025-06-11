import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { MessagesSection } from '@/components/pages/Admin';
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
// import Orders from '@/components/pages/Admin/orders/Orders';
const MessagesPage = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />
      <div className='w-full'>
        <MessagesSection />
      </div>
    </main>
  );
};

export default MessagesPage;