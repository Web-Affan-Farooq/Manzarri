import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { DashboardSection } from '@/components/pages/Admin';

const Admin = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />

      <>
        <div className='p-[20px]'>
          <h1 className='text-[30px] font-semibold pb-[15px]'>Dashboard</h1>
          <DashboardSection />
        </div>
      </>

    </main>
  );
};

export default Admin;