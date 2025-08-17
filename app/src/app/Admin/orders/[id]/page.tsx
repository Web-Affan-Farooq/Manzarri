import React from 'react'
import { AdminPanelSidebar } from '@/components/layout';
import { OrderDetails, OrderedProducts } from '@/components/pages/Admin';

const DynamicOrderDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <>
      <main>
        <article className="flex min-h-screen bg-black text-white">
          <AdminPanelSidebar />
          <section className='w-full p-5 h-[100vh] overflow-y-auto gray-scroller'>
            <h1 className='text-2xl font-bold my-[20px]'>Order details</h1>
            <OrderDetails id={id} />
            <OrderedProducts id={id} />
          </section>
        </article>
      </main>
    </>
  )
}

export default DynamicOrderDetails;