import React, { useState } from "react";
import { Filter, Grid, List, Star, Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function MarketplacePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  // Placeholder product data
  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 3299,
      originalPrice: 3899,
      image:
        "https://images.unsplash.com/photo-1633092925902-2ccfad179aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVuZ2FnZW1lbnQlMjB3ZWRkaW5nfGVufDF8fHx8MTc1OTA1MDAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 156,
      category: "Rings",
      badge: "Bestseller",
      inStock: true,
    },
    {
      id: 2,
      name: "Gold Chain Necklace",
      price: 899,
      originalPrice: 1099,
      image:
        "https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTkwNTAwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 89,
      category: "Necklaces",
      badge: "New",
      inStock: true,
    },
    {
      id: 3,
      name: "Pearl Drop Earrings",
      price: 459,
      originalPrice: 599,
      image:
        "https://images.unsplash.com/photo-1682822749969-61a63203c501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGVhcnJpbmdzJTIwbHV4dXJ5JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTg5MzgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5.0,
      reviews: 201,
      category: "Earrings",
      badge: "Limited",
      inStock: true,
    },
    {
      id: 4,
      name: "Diamond Tennis Bracelet",
      price: 2199,
      originalPrice: 2599,
      image:
        "https://images.unsplash.com/photo-1758631279564-785e98313f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwYnJhY2VsZXQlMjBsdXh1cnklMjBqZXdlbHJ5fGVufDF8fHx8MTc1OTA1MDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 78,
      category: "Bracelets",
      badge: null,
      inStock: true,
    },
    {
      id: 5,
      name: "Emerald Vintage Ring",
      price: 1899,
      originalPrice: 2299,
      image:
        "https://images.unsplash.com/photo-1689775703592-976824d76033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwcmluZyUyMHByZWNpb3VzJTIwc3RvbmVzfGVufDF8fHx8MTc1OTA1MDA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      reviews: 134,
      category: "Rings",
      badge: null,
      inStock: false,
    },
    {
      id: 6,
      name: "Sapphire Statement Necklace",
      price: 1299,
      originalPrice: 1599,
      image:
        "https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXBwaGlyZSUyMG5lY2tsYWNlJTIwbHV4dXJ5JTIwamV3ZWxyeXxlbnwxfHx8fDE3NTkwNTAwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 92,
      category: "Necklaces",
      badge: "Sale",
      inStock: true,
    },
  ];

  const categories = [
    "Earrings",
    "Necklace",
    "Bracelet",
    "Nose jewellery",
    "Hair jewellery",
    "Rings",
  ];
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
    { value: "rating", label: "Highest Rated" },
  ];

  const ProductCard = ({
    product,
    isListView = false,
  }: {
    product: (typeof products)[0];
    isListView?: boolean;
  }) => (
    <Card
      className={`group cursor-pointer overflow-hidden border-manzarri-black/10 hover:shadow-xl transition-all duration-300 ${
        isListView ? "flex" : ""
      } ${!product.inStock ? "opacity-75" : ""}`}
    >
      <div className={`relative ${isListView ? "w-48 flex-shrink-0" : ""}`}>
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className={`${
            isListView ? "w-full h-48" : "w-full h-64"
          } object-cover group-hover:scale-105 transition-transform duration-300`}
        />
        {product.badge && (
          <Badge
            className={`absolute top-4 left-4 ${
              product.badge === "Bestseller"
                ? "bg-manzarri-reddish-brown"
                : product.badge === "New"
                ? "bg-manzarri-green"
                : product.badge === "Limited"
                ? "bg-manzarri-faun"
                : "bg-manzarri-black"
            } text-manzarri-white`}
          >
            {product.badge}
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-manzarri-black/50 flex items-center justify-center">
            <span className="text-manzarri-white font-semibold">
              Out of Stock
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="ghost"
            className="w-8 h-8 p-0 bg-manzarri-white/90 hover:bg-manzarri-white"
          >
            <Heart className="w-4 h-4 text-manzarri-reddish-brown" />
          </Button>
        </div>
      </div>
      <div className={`p-6 ${isListView ? "flex-1" : ""}`}>
        <div
          className={`${isListView ? "flex justify-between items-start" : ""}`}
        >
          <div className={`${isListView ? "flex-1 pr-6" : ""}`}>
            <h3 className="text-xl font-semibold text-manzarri-black mb-2 group-hover:text-manzarri-reddish-brown transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-manzarri-faun fill-current"
                        : "text-manzarri-black/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-manzarri-black/60 ml-2">
                ({product.reviews})
              </span>
            </div>
            {isListView && (
              <p className="text-manzarri-black/70 mb-4">
                Exquisite craftsmanship meets timeless design in this stunning
                piece that elevates any collection.
              </p>
            )}
          </div>
          <div
            className={`${
              isListView ? "text-right" : "flex items-center justify-between"
            }`}
          >
            <div
              className={`${
                isListView ? "mb-4" : "flex items-center space-x-2"
              }`}
            >
              <span className="text-2xl font-bold text-manzarri-reddish-brown">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-manzarri-black/50 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <Button
              size="sm"
              className="bg-manzarri-black hover:bg-manzarri-black/90 text-manzarri-white"
              disabled={!product.inStock}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

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
                      <Checkbox id={category} />
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

              {/* Availability */}
              <div className="mb-8">
                <h4 className="font-medium text-manzarri-black mb-4">
                  Availability
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-stock" />
                    <label
                      htmlFor="in-stock"
                      className="text-sm text-manzarri-black/80"
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="out-of-stock" />
                    <label
                      htmlFor="out-of-stock"
                      className="text-sm text-manzarri-black/80"
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-8">
                <h4 className="font-medium text-manzarri-black mb-4">Rating</h4>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
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

              <Button className="w-full bg-manzarri-reddish-brown hover:bg-manzarri-reddish-brown/90 text-manzarri-white">
                Apply Filters
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <p className="text-manzarri-black/70">
                  Showing {products.length} of {products.length} products
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

                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px] border-manzarri-black/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isListView={viewMode === "list"}
                />
              ))}
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
