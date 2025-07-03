import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
// import { Flashcards, SalesChart, FetchDashboardData } from '@/components/pages/Admin';

const Finances= () => {
  return (
    <>
      {/* <FetchDashboardData /> */}
      <main className="flex min-h-screen bg-black text-white">
        <AdminPanelSidebar />
        <div className='w-full p-5 h-[100vh] overflow-y-auto'>
          <h1 className='text-2xl font-bold my-[20px]'>Finances management</h1>
          {/* <Flashcards />
          <br />
          <SalesChart /> */}
        </div>
      </main>
    </>
  );
};

export default Finances;