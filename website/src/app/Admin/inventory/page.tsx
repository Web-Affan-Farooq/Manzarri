import React from 'react';
import {AdminPanelSidebar} from "@/components/layout";
import { InventorySection } from '@/components/pages/Admin';

const Admin = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar/>
      
      <div className='w-full'>
        <InventorySection/>
      </div>
      
    </main>
  );
};

export default Admin;