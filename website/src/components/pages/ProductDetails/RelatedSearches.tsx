"use client";
import React from 'react';
import { useCatalog } from '@/stores/catalog';
import { Product } from '@/@types/product';
import ProductCard from '../Marketplace/Card';
import Link from 'next/link';

const RelatedSearches = ({sku_id , id}:{sku_id:string; id:string}) => {
    const {products} = useCatalog();
    const sameCategory = products.filter((item:Product) => {
      return item.stockKeepingUnit === sku_id && item._id !== id ; 
    });    
  return (
        <section>
            <div className="max-sm:p-1 sm:p-8 xl:w-[80vw] xl:mx-auto grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-6 max-sm:gap-3 ">
                {sameCategory.map((product: Product, idx: number) => (
                    <Link href={`/marketplace/${product._id}`} key={idx}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </section>
  )
}

export default RelatedSearches