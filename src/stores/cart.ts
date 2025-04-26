import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
    id: number;    
    image:string;
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
                    { id: 1, name: "Elegant Earrings", price: 25, image:"/images/earrings/1.jpeg" },
                    { id: 2, name: "Stylish Ring", price: 45, image:"/images/earrings/1.jpeg" },
                    { id: 3, name: "Gold Necklace dfjkdljfklsdjflkjdkfjsdkfj", price: 80 , image:"/images/earrings/1.jpeg"},
                    { id: 4, name: "Gold Necklace", price: 80 , image:"/images/earrings/1.jpeg"},
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
