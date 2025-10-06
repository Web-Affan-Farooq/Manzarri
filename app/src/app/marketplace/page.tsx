"use client";
import React, { useMemo, useState } from "react";
import { Filter, Grid, List, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProductCard } from "@/components/pages/Marketplace";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useCatalog } from "@/stores/catalog";

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { products } = useCatalog();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [ratingsRange, setRatingsRange] = useState([5]);
  const [selectedCategories, setSelectedCategories] = useState([
    "earrings",
    "necklace",
    "bracelet",
    "nosejewellery",
    "hairjewellery",
    "rings",
  ]);

  const categories = [
    "earrings",
    "necklace",
    "bracelet",
    "nosejewellery",
    "hairjewellery",
    "rings",
  ];

  const filteredList = useMemo(() => {
    return products.filter(
      (product) =>
        selectedCategories.includes(
          product.jewelleryType.toLowerCase().trim()
        ) &&
        product.price > priceRange[0] &&
        product.price < priceRange[1] &&
        ratingsRange.includes(product.ratings)
    );
  }, [products, selectedCategories, priceRange, ratingsRange]);

  return (
    <div className="min-h-screen bg-manzarri-white">
      {/* Header */}
      <div className="bg-manzarri-skin/20 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-manzarri-black mb-4">
            Marketplace
          </h1>
          <p className="text-xl text-manzarri-black/70">
            Discover our complete collection of luxury jewelry
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <Card className="p-6 border-manzarri-black/10">
              <h3 className="text-xl font-semibold text-manzarri-black mb-6">
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-medium text-manzarri-black mb-4">
                  Categories
                </h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        // type="checkbox"
                        onCheckedChange={(check) => {
                          if (!check) {
                            const filteredCategories =
                              selectedCategories.filter(
                                (ca) =>
                                  ca.toLowerCase().trim() !==
                                  category.toLowerCase().trim()
                              );
                            setSelectedCategories(filteredCategories);
                          } else {
                            setSelectedCategories([
                              ...selectedCategories,
                              category,
                            ]);
                          }
                        }}
                        id={category}
                        checked={selectedCategories.includes(category)}
                      />
                      <label
                        htmlFor={category}
                        className="text-sm text-manzarri-black/80"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-medium text-manzarri-black mb-4">
                  Price Range
                </h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    step={100}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-manzarri-black/70">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-8">
                <h4 className="font-medium text-manzarri-black mb-4">Rating</h4>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={ratingsRange.includes(rating)}
                        onCheckedChange={(check) => {
                          if (!check) {
                            const updatedRatingsRange = ratingsRange.filter(
                              (range) => range !== rating
                            );
                            setRatingsRange(updatedRatingsRange);
                          } else {
                            setRatingsRange([...ratingsRange, rating]);
                          }
                        }}
                      />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center text-sm text-manzarri-black/80"
                      >
                        <div className="flex items-center mr-2">
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-manzarri-faun fill-current"
                            />
                          ))}
                        </div>
                        & Up
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p className="text-manzarri-black/70">
                  Showing {filteredList.length} of {products.length} products
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden border-manzarri-black/20"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <div className="flex border border-manzarri-black/20 rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={
                      viewMode === "grid"
                        ? "bg-manzarri-black text-manzarri-white"
                        : "text-manzarri-black"
                    }
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={
                      viewMode === "list"
                        ? "bg-manzarri-black text-manzarri-white"
                        : "text-manzarri-black"
                    }
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-6"
              }
            >
              {filteredList.length <= 0 ? (
                <p className="text-manzarri-reddish-brown md:text-md text-sm text-center">
                  No products found ...
                </p>
              ) : (
                filteredList.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    isListView={viewMode === "list"}
                  />
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
