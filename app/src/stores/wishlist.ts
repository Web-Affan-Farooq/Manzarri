import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/@types/product";
import AddedByWishlistAction from "@/actions/AddedByWishlistAction";
import { toast } from "sonner";

interface WishlistState {
  wishlist: Product[];
  setWishlist: (list: Product[]) => void;
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      setWishlist: (list) =>
        set(() => ({
          wishlist: list,
        })),

      addToWishlist: async (item: Product) => {
        // 1. ______ check if the product already exists  ...
        const existingItem = get().wishlist.find((i) => i._id === item._id);
        console.log("Checking if product already exists in wishlist : ", existingItem)
        // 2. ______ If product already in wishlist dont duplicate it  ...
        if (existingItem) return;

        console.log("Calling server action", item)
        const { success, message } = await AddedByWishlistAction(
          item._id,
          item.productName,
          item.addedToWishlistBy // only a list of all users of have added the same product in thier wishlist
        );
        // 3.  ______ If admin is not notified show error ...
        if (!success) {
          toast.error(message);
        }
        // 4. ______ add product to wishlist ...
        toast.success(message);
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
