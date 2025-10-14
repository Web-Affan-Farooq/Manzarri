import { useMarketplaceData } from "@/stores/catalog";
import { useEffect, useState } from "react";
import { Product } from "@/@types/product";

const useIndivisualProduct = (id: string) => {
  // _____ Getting products list ....
  const { products } = useMarketplaceData();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    // ____ first check if product is fetched earlier ...
    const product = products.find((p) => p._id === id);

    setProduct(product);
  }, [products, id]);

  return {
    product: product,
  };
};
export default useIndivisualProduct;
