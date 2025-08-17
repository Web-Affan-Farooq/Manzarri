"use client"
import { useOrderDetails } from '@/components/hooks';
import { Orders } from '@/components/icons';
import React from 'react'

const OrderDetails = ({id}:{id:string}) => {
    const {order} = useOrderDetails(id);    
return (
        <>
            {/* Order ID */}
            <div className='p-[5px]'>
                <p className='text-[13px] text-gray-400'>OrderId</p>
                <div className='flex flex-row gap-[10px] items-center'>
                    <div className='bg-gray-800/90 px-[15px] py-[5px] rounded-md truncate w-[200px]'>
                        {order?._id}
                    </div>
                    <button type="button" className='bg-gray-400 px-[10px] py-[1px] rounded-md' onClick={() => {
                        if (order && order._id) {
                            window.navigator.clipboard.writeText(order._id)
                        }
                    }}>copy</button>
                </div>
            </div>

            {/* User ID */}
            <div className='p-[5px]'>
                <p className='text-[13px] text-gray-400'>UserId</p>
                <div className='flex flex-row gap-[10px] items-center'>
                    <div className='bg-gray-800/90 px-[15px] py-[5px] rounded-md truncate w-[200px]'>
                        {order?.userId}
                    </div>
                    <button type="button" className='bg-gray-400 px-[10px] py-[1px] rounded-md' onClick={() => {
                        if (order) {
                            window.navigator.clipboard.writeText(order?.userId)
                        }
                    }}>copy</button>
                </div>
            </div>
            <br />
            <h2 className='font-semibold text-[16px] mb-2'>Details </h2>
            <div className='flex flex-row flex-nowrap gap-[10px] items-center'><Orders className={`text-gray-custom hover:text-blue-600 transition w-[20px] h-[20px]`} /> {order?.weightageInGrams} gm</div>
            
        </>)
}

export default OrderDetails