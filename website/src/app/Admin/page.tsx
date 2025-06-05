import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import Dashboard from '@/components/pages/Admin/dashboard/Dashboard';

const Admin = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />

      <>
        <div className='p-[20px]'>
          <h1 className='text-[30px] font-semibold pb-[15px]'>Dashboard</h1>
          <Dashboard />
        </div>
      </>

    </main>
  );
};

export default Admin;