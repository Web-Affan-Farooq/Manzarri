// ____ Hooks ...
import { useMemo } from "react";
import { useMarketplaceData } from "@/stores/catalog";

// _____ Libraries ...
import { create } from "zustand";
import { Product } from "@/@types/product";

// ____ Type for central state ...
interface FiltersState {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  ratingsRange: number[];
  setRatingsRange: (range: number[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (list: string[]) => void;
}

// ____ main state or filters initializers ...
const useFilters = create<FiltersState>()((set) => ({
  priceRange: [0, 5000],
  setPriceRange: (range) =>
    set(() => ({
      priceRange: range,
    })),

  ratingsRange: [2],
  setRatingsRange: (range) =>
    set(() => ({
      ratingsRange: range,
    })),
  selectedCategories: [
    "earrings",
    "necklace",
    "bracelet",
    "nosejewellery",
    "hairjewellery",
    "rings",
  ],
  setSelectedCategories: (list) =>
    set(() => ({
      selectedCategories: list,
    })),
}));

// _____ Hook which provide filtered products ...

export const useMarketplaceFilters = () => {
  // _____ Extract products from global state ...
  const { products } = useMarketplaceData();

  // _____ Get the states and setters ...
  const {
    priceRange,
    setPriceRange,
    ratingsRange,
    setRatingsRange,
    selectedCategories,
    setSelectedCategories,
  } = useFilters();

  // ______ Cetegories for rendering checkboxes ...
  const categories = [
    "earrings",
    "necklace",
    "bracelet",
    "nosejewellery",
    "hairjewellery",
    "rings",
  ];

  // _____ Resultant filtered list , created automatically when any of the filter selected ...
  const filteredList = useMemo(() => {
    return products.filter(
      (product: Product) =>
        selectedCategories.includes(
          product.jewelleryType.toLowerCase().trim()
        ) &&
        product.price > priceRange[0] &&
        product.price < priceRange[1] &&
        ratingsRange.includes(product.ratings)
    );
  }, [products, selectedCategories, priceRange, ratingsRange]);

  return {
    priceRange,
    setPriceRange,

    ratingsRange,
    setRatingsRange,

    selectedCategories,
    setSelectedCategories,
    filteredList,

    categories,
  };
};
