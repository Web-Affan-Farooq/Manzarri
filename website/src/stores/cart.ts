import { create } from "zustand";
import { CartProduct } from "@/@types/cart";
import { persist } from "zustand/middleware";

interface CartState {
  cart: CartProduct[]
  addToCart: (item: CartProduct) => void;
  updateQuantity: (item: CartProduct) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
      (set, get) => ({
        cart: [],

        updateQuantity: (item) => {
          const { cart } = get();

          const findProduct = cart.find((i) => i.id === item.id && i.size === item.size);
          if (findProduct) {
            set({
              cart: cart.map((cartProduct) =>
                cartProduct.id === findProduct.id && cartProduct.size === findProduct.size
                  ? { ...cartProduct, quantity: item.quantity }
                  : cartProduct
              ),
            });
          }
        },


        addToCart: (item: CartProduct) => {
          const { cart } = get();
          const existingProduct = cart.find((i) => i.item._id === item.item._id && i.size === item.size);

          if (existingProduct) {
            return set({
              cart: cart.map((i) =>
                i.item._id === item.item._id && i.size === item.size
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            });
          }

          return set({
            cart: [...cart, { ...item, quantity: item.quantity, }],
          });
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
