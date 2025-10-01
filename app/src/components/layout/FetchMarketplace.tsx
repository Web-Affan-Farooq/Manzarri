"use client";

import { FetchMarketplaceProducts } from "@/actions/FetchMarketplaceProducts";
import { useCatalog } from "@/stores/catalog";
import React, { useEffect } from "react";

const FetchDMarketplaceData = ({ children }: { children: React.ReactNode }) => {
  const { setProducts } = useCatalog();

  useEffect(() => {
    const getData = async () => {
      console.log(
        "-------------------Running data fetches -----------------------------"
      );
      try {
        const products = await FetchMarketplaceProducts();
        setProducts(products);
        // const newProducts = JSON.stringify(products, null, 2)
        //   .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
        //   .replace(/"/g, '"'); // optional: preserve quotes around values
        console.log(JSON.stringify(products));
      } catch (err) {
        console.log(err);
      }
      console.log(
        "-------------------Fetches completed -----------------------------"
      );
    };
    getData();
    setInterval(() => {
      getData();
    }, 180000);
  }, [setProducts]);
  return <>{children}</>;
};
export default FetchDMarketplaceData;
