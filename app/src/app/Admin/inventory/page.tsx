import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { InventoryUpdates,StockListing } from '@/components/pages/Admin';

const Admin =  () => {
  return (
    <>
      <main>
        <article className="flex min-h-screen bg-black text-white">
          <AdminPanelSidebar />
          <section className='w-full h-[100vh] overflow-y-auto gray-scroller'>
            <h1 className='text-2xl font-bold my-[20px] p-5'>Inventory</h1>
            <InventoryUpdates/>
            <h1 className='text-2xl font-bold my-[20px] px-5'>Stock</h1>
            <StockListing/>
          </section>
        </article>
      </main>
    </>
  );
};

export default Admin;
