import { create } from "zustand";
import { Product } from "@/@types/product";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import {
  FetchMarketplaceProducts,
  FetchOffers,
} from "@/actions/FetchMarketplaceData";
import { Offer } from "@/@types/offer";

interface CatalogState {
  products: Product[];
  fetchProducts: () => void;
  offers: Offer[];
  fetchOffers: () => void;
}

export const useMarketplaceData = create<CatalogState>()(
  persist(
    (set) => ({
      products: [],
      offers: [],
      fetchOffers: async () => {
        try {
          const response = await FetchOffers();
          return set({
            offers: response,
          });
        } catch (err) {
          console.log(err);
          toast.error("An error occured");
        }
      },
      fetchProducts: async () => {
        try {
          const products = await FetchMarketplaceProducts();

          return set({ products });
        } catch (err) {
          console.log(err);
          toast.error("An error occured");
        }
      },
    }),
    {
      name: "product-catalog",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// const newProducts = JSON.stringify(products, null, 2)
//   .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
//   .replace(/"/g, '"'); // optional: preserve quotes around values
