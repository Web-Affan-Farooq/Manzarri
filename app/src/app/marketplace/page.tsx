"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/pages/Marketplace";
import { useMarketplaceData } from "@/stores/catalog";
import {
  PriceFilter,
  RatingsFilter,
  CategoryFilter,
  SearchBar,
  useMarketplaceFilters,
} from "@/components/pages/Marketplace";

export default function MarketplacePage() {
  const { filteredList } = useMarketplaceFilters();
  const { products } = useMarketplaceData();

  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <div className="bg-manzarri-skin/20 py-30 bg-[url('/images/marketplace-image.jpeg')] bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-manzarri-black mb-4">
            Marketplace
          </h1>
          <p className="text-sm md:text-md text-manzarri-black/70">
            Discover our complete collection of luxury jewelry
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <SearchBar />
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p className="text-sm text-manzarri-black/70">
                  Showing {filteredList.length} of {products.length} products
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-md">
                {/* ____ place filter button inside this ... */}{" "}
                {/* _____ Category filter ... */}
                <CategoryFilter />
                {/* _____ ratings filter ... */}
                <PriceFilter />
                {/* _____ ratings filter ... */}
                <RatingsFilter />
              </div>
            </div>

            {/* Products Grid/List */}
            <div className="columns-2 md:columns-3 lg:columns-4">
              {filteredList.length <= 0 ? (
                <p className="text-manzarri-reddish-brown md:text-md text-sm text-center">
                  No products found ...
                </p>
              ) : (
                filteredList.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-manzarri-black/20"
                >
                  Previous
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                    className={
                      page === 1
                        ? "bg-manzarri-reddish-brown text-manzarri-white"
                        : "border-manzarri-black/20"
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-manzarri-black/20"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
