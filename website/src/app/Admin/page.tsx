import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { Flashcards, SalesChart, FetchDashboardData, PieChart } from '@/components/pages/Admin';

const Admin = () => {
  return (
    <>
      <FetchDashboardData />
      <main className="flex min-h-screen bg-black text-white">
        <AdminPanelSidebar />
        <div className='w-full p-5 h-[100vh] overflow-y-auto'>
          <h1 className='text-2xl font-bold my-[20px]'>Dashboard</h1>
          <Flashcards />
          <br />
          <SalesChart />
          <br />
          <PieChart/>
        </div>
      </main>
    </>
  );
};

export default Admin;