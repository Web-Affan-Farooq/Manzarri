import React from 'react'
import { AdminPanelSidebar } from '@/components/layout';
import { OrderDetailsPage } from '@/components/pages/Admin';

const OrderDetails = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params;
    return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />
      <div className='w-full'>
        <OrderDetailsPage id={id}/>
      </div>
    </main>  )
}

export default OrderDetails