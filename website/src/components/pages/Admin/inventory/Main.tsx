"use client";
import React from 'react';
import Link from 'next/link';
import Stock from './Stock';
import useDashboardCache from '@/stores/admin';

const Main =  () => {
  const {inventory} = useDashboardCache();

  return (
    <>
      {/* <Fallback success={success} message={message} /> */}
      <section className='relative w-full h-[100vh] overflow-y-auto'>
        <h1 className="text-[25px] font-bold p-5">Inventory</h1>
        <div className='p-5'>
          <p><span className='text-blue-600'>{inventory.length}</span> products in stock</p>
          <p><span className='text-blue-600'>{inventory.length}</span> sold out</p>
          <p>Manage full inventory on <Link href={"https://manzarri-sanity.vercel.app/"} target={"_blank"} className="text-blue-500">Sanity studio</Link></p>
        </div>
        <h2 className="text-[20px] font-bold p-5">Stock</h2>
        {inventory.length <= 0 ? <p className='p-10'>No products found ...</p> : <Stock arrayData={inventory} />
        }
      </section>
    </>
  )
}

export default Main