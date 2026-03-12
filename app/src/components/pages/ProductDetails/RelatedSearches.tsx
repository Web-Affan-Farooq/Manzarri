"use client";
import React from "react";
import { useMarketplaceData } from "@/stores/useCatalog";
import { Product } from "@/@types/product";
import ProductCard from "../Marketplace/Card";

const RelatedSearches = ({ sku_id, id }: { sku_id: string; id: string }) => {
  const { products } = useMarketplaceData();
  const sameCategory = products.filter((item: Product) => {
    // Filter products that belongs to same sku but different id with respect to product's id shown in products details page
    return item.stockKeepingUnit === sku_id && item._id !== id;
  });
  return (
    <div className="py-[40px] columns-2 md:columns-3 lg:columns-4">
      {sameCategory.length <= 0 ? (
        <p className="text-manzarri-reddish-brown md:text-md text-sm text-center">
          No products found ...
        </p>
      ) : (
        sameCategory.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default RelatedSearches;
