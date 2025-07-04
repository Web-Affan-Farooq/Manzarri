
import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { Flashcards, SalesChart, FetchDashboardData, PaymentsAnalytics } from '@/components/pages/Admin';

const Admin = () => {
  return (
    <>
      <FetchDashboardData />
      <main className="flex min-h-screen bg-black text-white">
        <AdminPanelSidebar />
        <div className='w-full h-[100vh] overflow-y-auto gray-scroller'>
          <div className='p-5'>
           <h1 className='text-2xl font-bold my-[20px]'>Dashboard</h1>
          <Flashcards />           
          </div>
          <br /><br />
          <div className='flex flex-row flex-wrap gap-4 gray-scroller p-5 max-sm:p-3'>
            <SalesChart />
            <PaymentsAnalytics />
            <PaymentsAnalytics />
            <PaymentsAnalytics />
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;