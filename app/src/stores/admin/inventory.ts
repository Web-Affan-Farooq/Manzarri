import { toast } from "sonner";
import { create } from "zustand";
import sanityClient from "@/lib/sanity";
import { Product } from "@/@types/product";
import { productQuery } from "@/queries/product";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  DeleteProductAction,
  EditProductAction,
} from "@/actions/Admin/InventoryActions";

interface InventoryState {
  inventory: Product[];
  fetchInventory: () => void;
  deleteProduct: (id: string) => void;
  editProduct: (updatedProduct: Product) => void;
}

const getInventory = async () => {
  try {
    const response = await sanityClient.fetch(productQuery);
    return response;
  } catch (err) {
    console.log(err);
    toast.error("An error occured");
  }
};

const useInventory = create<InventoryState>()(
  persist(
    (set) => ({
      /* _____ Inventory ... */
      inventory: [],

      fetchInventory: async () => {
        return set({
          inventory: await getInventory(),
        });
      },

      deleteProduct: async (id) => {
        // _____ Call server action ...
        const { message, success } = await DeleteProductAction(id);
        if (!success) {
          return toast.error(message);
        }
        toast.success(message);

        // _____ Update the state...
        return set((state) => ({
          inventory: state.inventory.filter((p) => p._id !== id),
        }));
      },

      editProduct: async (updatedProduct) => {
        // ____ call server action ...
        const { success, message } = await EditProductAction(updatedProduct);
        if (!success) {
          return toast.error(message);
        }
        toast.success(message);

        // ____ update the state  ...
        return set((state) => {
          const updatedList = state.inventory.map((p) => {
            if (p._id === updatedProduct._id) {
              return updatedProduct;
            } else return p;
          });
          return {
            inventory: updatedList,
          };
        });
      },
    }),
    {
      name: "inventory-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useInventory;
