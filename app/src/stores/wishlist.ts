import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/@types/product";

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      
      addToWishlist: (item: Product) => {
        const existingItem = get().wishlist.find((i) => i._id === item._id);
        if (existingItem) return;
        set((state) => ({
          wishlist: [...state.wishlist, item],
        }));
      },

      removeFromWishlist: (id: string) =>
        set((state) => ({
          wishlist: state.wishlist.filter((wishlistItem) => wishlistItem._id !== id),
        })),

      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: "manzarri-wishlist", // key used in localStorage
    }
  )
);
