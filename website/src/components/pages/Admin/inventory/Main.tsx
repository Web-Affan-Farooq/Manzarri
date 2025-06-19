import sanityClient from '@/lib/sanity';
import React from 'react';
import { Product } from '@/@types/product';
import DrawerDemo from './ExampleDrawer';

const Main = async () => {
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
    // console.log("Response : ",response);

//     const orders = await sanityClient.fetch(`*[_type == "Orders"].packages[]{
// productId,
//   quantity
// }
// `)
    // console.log(orders);

    // console.log(response);
    return (
        <section className='relative w-full h-[100vh] overflow-y-auto'>
            <h1 className="text-[25px] font-bold p-5">Inventory</h1>
            <div className='p-5'>
                <p><span className='text-blue-600'>{response.length}</span> products in stock</p>
                <p><span className='text-blue-600'>{response.length}</span> sold out</p>
            </div>
            <h2 className="text-[20px] font-bold p-5">Stock</h2>
            {/* <Stock /> */}
            <div className='flex flex-col'>
            {response.map((product: Product, idx: number) => {
                return <DrawerDemo product={product} key={idx}/>
            })}
            </div>
        </section>
    )
}

export default Main