import React from 'react';
import ProductDetails from '@/components/pages/ProductDetails/ProductDetails';

const ProductDetailsPage = async ({params}:{params:Promise<{id:string}>}) => {
  const {id} = await params; // ____ Pass this id to the details card to get the corresponding product from catalog

  return (
    <section>
      <ProductDetails id={id}/>
    </section>
  )
}

export default ProductDetailsPage