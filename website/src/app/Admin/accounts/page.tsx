import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { AccountsList } from '@/components/pages/Admin';

const Admin = () => {
  return (
    <>
      <main>
        <article className="flex min-h-screen bg-black text-white">
          <section className='w-full p-1'>
            <AdminPanelSidebar />
            <div className='w-full p-5 h-[100vh] overflow-y-auto gray-scroller'>
              <h1 className='text-2xl font-bold my-[20px]'>Accounts</h1>
              <AccountsList />
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Admin;