import React from 'react';

/* ____Child components ...*/
import { Searchbar, Bannerscroll, Tags, ProductCatalog } from "@/components/pages/Marketplace";

const MarketplaceSection = () => {
                    /* ____ Error tracking ... */
                    // console.log("/marketplace");
                    
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <br />
      <br />
      <br />
      <br />
      <Searchbar />
      <br />
      <br />
      <Bannerscroll />
      <br /><br /><br />
      <Tags tags={[
        {
          name: "Earrings",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Bracelets",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Necklace",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Hair jewellery",
          image: "/images/earrings/1.jpeg",
        },
        {
          name: "Nose jewellery",
          image: "/images/earrings/1.jpeg",
        }]} />

      <br />
      <br />

      <ProductCatalog />

    </section>
  );
};

export default MarketplaceSection;