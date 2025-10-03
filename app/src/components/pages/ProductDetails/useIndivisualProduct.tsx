import sanityClient from "@/lib/sanity";
import { dynamicProductQuery } from "@/queries/product";
import { useCatalog } from "@/stores/catalog";
import { useEffect, useState } from "react";
import { Product } from "@/@types/product";

export const useIndivisualProduct = (id: string) => {
  // _____ Getting products list ....
  const { products } = useCatalog();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    // ____ first check if product is fetched earlier ...
    const product = products.find((p) => p._id === id);

    const getData = async (id: string) => {
      const q = dynamicProductQuery([
        {
          name: "_id",
          value: id,
        },
      ]);

      // ____ If not fetch the indivisual product...
      const [product] = await sanityClient.fetch(q);
      setProduct(product);
    };

    if (!product) {
      getData(id);
    }
    setProduct(product);
  }, [products, id]);

  return {
    product: product,
  };
};
