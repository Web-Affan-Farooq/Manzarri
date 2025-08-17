'use client';
import { useOrderDetails } from '@/components/hooks';
import React from 'react';
import Card from './card';

const OrderedProducts = ({ id }: { id: string }) => {
    const { order, packages } = useOrderDetails(id);
    return (
        <>
            {/* Render Ordered Products */}
            <div className='mt-4'>
                <div className='flex flex-row flex-nowrap justify-between items-center'>
                    <h2 className='font-semibold text-[16px]'>Products</h2>
                    <p><span className='text-blue-500'>{packages.length}</span> products &nbsp; &nbsp; $ <span className='text-blue-500'>{order?.amountPayable}</span></p>
                </div>
                <br />
                {packages.length > 0 ? (
                    packages.map((p, idx: number) => (
                        <Card product={p} key={idx} />
                    ))
                ) : (
                    <p>No products found for this order.</p>
                )}
            </div>
        </>
    )
}

export default OrderedProducts