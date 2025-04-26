import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
    id: number;
    name: string;
    price: number;
}

interface CartState {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    updateItem: (item: CartItem) => void;
    deleteItem: (item: CartItem) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
        (set) => (
            {
                cart: [
                    { id: 1, name: "T-shirt", price: 25 },
                    { id: 2, name: "Jeans", price: 45 },
                    { id: 3, name: "Sneakers", price: 80 },
                ],

                addItem: (item: CartItem) =>
                    set((state: CartState) => ({
                        cart: [...state.cart, item],
                    })),

                updateItem: (item) =>
                    set((state) => ({
                        cart: state.cart.map((cartitem) =>
                            cartitem.id === item.id ? item : cartitem
                        ),
                    })),

                deleteItem: (item) =>
                    set((state) => ({
                        cart: state.cart.filter((cartitem) => cartitem.id !== item.id),
                    })),

                clearCart: () =>
                    set(() => ({
                        cart: [],
                    })),

            }
        ),
        {
            name: "manzarri-cart",
        }
    )
);
