import React from 'react'
import sanityClient from '@/lib/sanity';
import ProductCard from './Card';
import Link from 'next/link';
import { Product } from "@/@types/product";
import FeedCatalog from './FeedCatalog';

const ProductCatalog = async () => {
  let data = [];
  const q = `*[_type == "Product"] {
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
      availableSizes,
  tags,
  ratings,
  price,
  stockQuantity,
  weightInGrams,
  dimensions,
  material,
  images[] {
    asset-> {
      _id,
      url
    }
  }
}
`;
  const response = await sanityClient.fetch(q);
  data = response;
  return (
    <section>
      <div className="xl:w-[80vw] xl:mx-auto grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
        <FeedCatalog products={data} />
        {data.map((product: Product, idx: number) => (
          <Link href={`/marketplace/${product._id}`} key={idx}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProductCatalog