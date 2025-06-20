import sanityClient from '@/lib/sanity';
import React from 'react';
import Link from 'next/link';
import Stock from './Stock';
import Fallback from "../Fallback";

const getInventoryData = async () => {
  try {
    const q = `
    *[_type == "Product"] {
  _id,
  productName,
  productDescription[]{
    children[]{
      _key,
      _type,
      text
    }
  },
  discountPercentage,
  applicableOffers,
  stockKeepingUnit,
  jewelleryType,
  ocassions,
  tags,
  ratings,
  price,
  stockQuantity,
  weightInGrams,
    availableSizes,
  dimensions,
  material,
  images[] {
    asset-> {
      _id,
      url
    }
  }
}`;
    const response = await sanityClient.fetch(q);
    return {
      data: response,
      success: true
    }
  } catch (err) {
    console.log(err);
    return {
      data: [],
      success: false,
      message: "An error occured"
    }
  }
}

const Main = async () => {
  const { data, success, message } = await getInventoryData();

  return (
    <>
      <Fallback success={success} message={message} />
      <section className='relative w-full h-[100vh] overflow-y-auto'>
        <h1 className="text-[25px] font-bold p-5">Inventory</h1>
        <div className='p-5'>
          <p><span className='text-blue-600'>{data.length}</span> products in stock</p>
          <p><span className='text-blue-600'>{data.length}</span> sold out</p>
          <p>Edit full product on <Link href={"https://manzarri-sanity.vercel.app/"} target={"_blank"} className="text-blue-500">Sanity studio</Link></p>
        </div>
        <h2 className="text-[20px] font-bold p-5">Stock</h2>
        {data.length <= 0 ? <p className='p-10'>No products found ...</p> : <Stock arrayData={data} />
        }
      </section>
    </>
  )
}

export default Main