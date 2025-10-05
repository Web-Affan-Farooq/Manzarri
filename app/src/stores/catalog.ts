import { create } from "zustand";
import { Product } from "@/@types/product";
import { persist, createJSONStorage } from "zustand/middleware";

interface CatalogState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useCatalog = create<CatalogState>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products }),
    }),
    {
      name: "product-catalog",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
