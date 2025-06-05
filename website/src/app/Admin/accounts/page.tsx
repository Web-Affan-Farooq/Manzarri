import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { AccountsSection } from '@/components/pages/Admin';

const Admin = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />

      <div className='p-[20px] w-full'>
        <AccountsSection />
      </div>
    </main>
  );
};

export default Admin;