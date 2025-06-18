"use client";
import { useOrders } from '@/stores/orders';
import React, { useEffect, useState } from 'react';
import { OrderDetails } from '@/@types/order';
import sanityClient from '@/lib/sanity';
import { Product } from '@/@types/product';
import Card from './card';
import Orders from "@/components/icons/Orders";

interface OrderedProducts {
    _key:string;
    size:string;
    quantity:number;
    productSKU:string;
    productId:string;
    
  productName: string;
  images: {
    asset: {
      url: string;
      _id: string;
    };
  };
  price: number;
}

const Main = ({ id }: { id: string }) => {
  const { orders } = useOrders();
  const [order, setOrder] = useState<OrderDetails>();
  const [packages, setPackages] = useState<OrderedProducts[]>([]);

  useEffect(() => {
    const foundOrder = orders.find((order) => order._id === id);
    if (foundOrder) {
      setOrder(foundOrder);

      // fetch all products in this order
      const fetchProductData = async () => {
        const productIds = foundOrder.packages.map((p) => p.productId);
        const productData = await sanityClient.fetch(
          `*[_type == "Product" && _id in $ids]{
            _id,
            productName,
            price,
            images[0]{
              asset->{
                _id,
                url
              }
            }
          }`,
          { ids: productIds }
        );

        // Merge quantity and other local data from order.packages
        const enrichedPackages = foundOrder.packages.map((pkg) => {
          const matchedProduct = productData.find((p:Pick<Product, "_id" >) => p._id === pkg.productId);
          return {
            ...pkg,
            productName: matchedProduct?.productName || pkg.productName,
            price: matchedProduct?.price,
            images: matchedProduct?.images,
          };
        });
        // console.log("Products  : ",enrichedPackages);
        
        setPackages(enrichedPackages);
        
      };

      fetchProductData();
    }
  }, [orders, id]);

  return (
    <div className='p-5'>
      <h1 className='text-[20px] font-bold'>Order Details</h1>
<br /><br />
      {/* Order ID */}
      <div className='p-[5px]'>
        <p className='text-[13px] text-gray-400'>OrderId</p>
        <div className='flex flex-row gap-[10px] items-center'>
          <div className='bg-gray-800/90 px-[15px] py-[5px] rounded-md truncate w-[200px]'>
            {order?._id}
          </div>
          <button type="button" className='bg-gray-400 px-[10px] py-[1px] rounded-md' onClick={() => {
            if(order) {
                 window.navigator.clipboard.writeText(order?._id)
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
            if(order) {
                 window.navigator.clipboard.writeText(order?.userId)
            }
          }}>copy</button>
        </div>
      </div>
<br />
            <h2 className='font-semibold text-[16px] mb-2'>Details </h2>
            <div className='flex flex-row flex-nowrap gap-[10px] items-center'><Orders className={`text-gray-custom hover:text-blue-600 transition w-[20px] h-[20px]`} /> {order?.weightageInGrams} gm</div>
<br />

      {/* Render Ordered Products */}
      <div className='mt-4'>
        <div className='flex flex-row flex-nowrap justify-between items-center'>
            <h2 className='font-semibold text-[16px]'>Products</h2>
            <p><span className='text-blue-500'>{packages.length}</span> products &nbsp; &nbsp; $ <span className='text-blue-500'>{order?.amountPayable}</span></p>
        </div>
        <br />
        {packages.length > 0 ? (
          packages.map((p,idx:number) => (
             <Card product={p} key={idx}/>
          ))
        ) : (
          <p>No products found for this order.</p>
        )}
      </div>
    </div>
  );
};

export default Main;