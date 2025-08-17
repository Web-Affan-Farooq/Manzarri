import React from 'react'
import Image from 'next/image';
import { OrderedProducts } from '@/@types/order';

const Card = ({ product }: { product: OrderedProducts }) => {
    if (product.size === "md") {
        return <div className='relative flex flex-row max-[500px]:flex-col flex-wrap items-center max-[500px]:items-start gap-[10px] p-3 rounded-md'>
            <div className='w-[50px] h-[50px] rounded-md'>
                <Image src={product.image} alt={product.productName} width={50} height={50} className='object-cover w-full h-full rounded-md' />
            </div>
            <div>
                <p className='truncate'><strong>{product.productName}</strong></p>
                <p className='text-gray-500 text-[14px]'>Price : $ {product.price}</p>
                <p className='text-gray-500 text-[14px]'>Quantity : {product.quantity}</p>
                <span className='absolute px-[10px] py-[1px] rounded-lg bg-green-500/30 top-5 max-sm:top-9 right-16 max-sm:right-10 text-green-500 text-[14px]'> {product.size}</span>
            </div>
        </div>
    }
    else if (product.size === "lg") {
        return <div className='relative flex flex-row max-[500px]:flex-col flex-wrap items-center max-[500px]:items-start gap-[10px] p-3 rounded-md'>
            <div className='w-[50px] h-[50px] rounded-md'>
                <Image src={product.image} alt={product.productName} width={50} height={50} className='object-cover w-full h-full rounded-md' />
            </div>
            <div>
                <p className='truncate'><strong>{product.productName}</strong></p>
                <p className='text-gray-500 text-[14px]'>Price : $ {product.price}</p>
                <p className='text-gray-500 text-[14px]'>Quantity : {product.quantity}</p>
                <span className='absolute px-[10px] py-[1px] rounded-lg bg-yellow-500/30 top-5 max-sm:top-9 right-16 max-sm:right-10 text-yellow-500 text-[14px]'> {product.size}</span>
            </div>
        </div>
    }
    else if (product.size === "sm") {
        return <div className='relative flex flex-row max-[500px]:flex-col flex-wrap items-center max-[500px]:items-start gap-[10px] p-3 rounded-md'>
            <div className='w-[50px] h-[50px] rounded-md'>
                <Image src={product.image} alt={product.productName} width={50} height={50} className='object-cover w-full h-full rounded-md' />
            </div>
            <div>
                <p className='truncate'><strong>{product.productName}</strong></p>
                <p className='text-gray-500 text-[14px]'>Price : $ {product.price}</p>
                <p className='text-gray-500 text-[14px]'>Quantity : {product.quantity}</p>
                <span className='absolute px-[10px] py-[1px] rounded-lg bg-pink-400/30 top-5 max-sm:top-9 right-16 max-sm:right-10 text-pink-400 text-[14px]'> {product.size}</span>
            </div>
        </div>
    }
    // return (
    //     <div className='relative flex flex-row flex-wrap items-center gap-[10px] p-3 rounded-md'>
    //         <div className='w-[50px] h-[50px] rounded-md'>
    //             <Image src={product.images.asset.url} alt={product.productName} width={50} height={50} className='object-cover w-full h-full rounded-md' />
    //         </div>
    //         <div>
    //         <p className='truncate'><strong>{product.productName}</strong></p>
    //         <p className='text-gray-500 text-[14px]'>Price : $ {product.price}</p>
    //         <p className='text-gray-500 text-[14px]'>Quantity : {product.quantity}</p>
    //         <span className='absolute top-0 right-16 text-gray-500 text-[14px]'> {product.size}</span>
    //         </div>
    //     </div>


    // <div className='flex flex-row items-center justify-between p-3 rounded-md'>
    //     <div className='w-[50px] h-[50px] rounded-md'>
    //         <Image src={product.images.asset.url} alt={product.productName} width={50} height={50} className='object-cover w-full h-full rounded-md' />
    //     </div>
    //     <p className='truncate'>{product.productName}</p>
    //     <p className='text-gray-500 text-[14px]'>{product.price}</p>
    //     <p className='text-gray-500 text-[14px]'>{product.quantity}</p>
    // </div>
    // )
}

export default Card