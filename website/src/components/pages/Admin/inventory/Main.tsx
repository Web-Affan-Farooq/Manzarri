import sanityClient from '@/lib/sanity';
import React from 'react';
import { Product } from '@/@types/product';
import Link from 'next/link';
import Image from 'next/image';
import { DecreaseArrow } from '@/components/icons';

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
        <section className='relative w-full h-[100vh]'>
            {response.map((product: Product, idx: number) => {
                return <div className="cursor-pointer relative flex flex-col sm:flex-row w-full gap-4 p-4 rounded-md shadow-sm" key={idx}>
                    {/* Product Image */}
                    {/* <div className='absolute left-0 top-0'>
                        <DecreaseArrow className='text-red-500 z-10' />
                    </div> */}
                    <div className="max-sm:w-[200px] sm:w-[50px] h-[150px] sm:h-[50px] flex-shrink-0">
                        <Link href={`/marketplace/${product._id}`}>
                            <Image
                                src={product.images[0].asset.url}
                                alt={product.productName}
                                width={120}
                                height={120}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </Link>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center w-full">
                        {/* Product Name and Delete */}
                        <h2
                            className="text-base sm:text-sm font-semibold text-gray-400 truncate max-w-[180px] sm:max-w-full"
                            title={product.productName}
                        >
                            {product.productName} ({product.material}) 
                        </h2>

                        {/* Price */}
                        <div className="flex flex-row flex-nowrap justify-start items-center gap-[7px]">
                            <p className="text-green-600 font-semibold text-sm mt-1">
                                $ {product.price}
                            </p>
                            <DecreaseArrow size={{
                                width:17,
                                height:17
                            }} className={`${product.stockQuantity <=5 ? "" :"hidden"} text-red-500 z-10`} />
                            <span className='bg-gray-400 w-5 h-5 text-center rounded-full text-[13px] text-black'>{product.stockQuantity}</span>
                            {/* <button
                                type="button"
                                className="text-white text-sm"
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button> */}
                        </div>
                    </div>
                </div>
            })}
        </section>
    )
}

export default Main