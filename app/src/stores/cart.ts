import { create } from "zustand";
import { CartProduct } from "@/@types/cart";
import { persist } from "zustand/middleware";
import AddedByCartAction from "@/actions/AddedByCartAction";
import { toast } from "sonner";

interface CartState {
  cart: CartProduct[];
  setCart: (list: CartProduct[]) => void;
  addToCart: (item: CartProduct) => void;
  updateQuantity: (item: CartProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      setCart: (list) =>
        set(() => ({
          cart: list,
        })),

      updateQuantity: (item) => {
        //1.  _____ Get the list...
        const { cart } = get();

        //2.  _____ Find the product in the list...
        const findProduct = cart.find(
          (i) => i.id === item.id && i.size === item.size
        );

        //3.  _____ If found update the quantity ... (to update quantity , product must be found)
        if (findProduct) {
          const updatedCart = cart.map((cartProduct) => {
            if (cartProduct.id === item.id && cartProduct.size === item.size) {
              return { ...cartProduct, quantity: item.quantity };
            } else return cartProduct;
          });
          return set({
            cart: updatedCart,
          });
        }
      },

      addToCart: async (item: CartProduct) => {
        //1.  _____ Get the list...
        const { cart } = get();

        //2. _____ Check if the product is already in cart ...
        const alreadyIncluded = cart.find(
          (i) => i.item._id === item.item._id && i.size === item.size
        );

        //3. _____ If product is found , only update quantity ...
        if (alreadyIncluded) {
          const updatedList = cart.map((i) => {
            if (i.id === alreadyIncluded.id) {
              toast.success(
                `Product is already in cart. Added ${item.quantity} more`
              );
              return {
                ...alreadyIncluded,
                quantity: alreadyIncluded.quantity + item.quantity,
              };
            } else return i;
          });
          return set({
            cart: updatedList,
          });
        }

        //4. _____ If product is not found ...
        if (!alreadyIncluded) {
          // _____ Report the admin ...
          const { success, message } = await AddedByCartAction(
            item.item._id,
            item.item.productName,
            item.item.addedToCartBy // only a list of all users of have added the same product in thier cart
          );
          if (!success) {
            toast.error(message);
          }

          // _____ Add to cart if reported successfully ...
          const updatedCart = [...cart, item];
          toast.success(message);

          return set({
            cart: updatedCart,
          });
        }
      },

      removeFromCart: (id: string) =>
        set((state) => ({
          cart: state.cart.filter((cartItem) => cartItem.id !== id),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "manzarri-cart",
    }
  )
);
