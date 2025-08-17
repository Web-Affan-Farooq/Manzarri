import { create } from "zustand";
import { Product } from "@/@types/product";

interface CatalogState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useCatalog = create<CatalogState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));