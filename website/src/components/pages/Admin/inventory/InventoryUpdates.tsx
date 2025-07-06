"use client";
import React from 'react';
import Link from 'next/link';
import useDashboardCache from '@/stores/admin';

const InventoryUpdates = () => {
    const {inventory} = useDashboardCache();
    return (
        <div className='p-5 flex flex-col gap-[10px]'>
          <p><span className='text-blue-600'>{inventory.length}</span> products in stock</p>
          <p>Manage full inventory on <Link href={"https://manzarri-sanity.vercel.app/"} target={"_blank"} className="text-blue-500">Sanity studio</Link></p>
          <Link href={"/Admin/inventory/restock"}><button type="button" className='cursor-pointer px-[20px] py-[5px] rounded-md bg-gray-800 font-semibold'>Restock products</button></Link>
        </div>  
        )
}

export default InventoryUpdates