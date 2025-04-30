import { create } from "zustand";

interface Category {
    category: string;
    updateCategory: (newCategory: string) => void;
}

export const useCategory = create<Category>((set) => (
    {
        category: "",
        updateCategory: (newCategory) => set(
            (state) => (
                {
                    category: newCategory,
                }
            ))
    }
));

/*
                addItem: (item: CartItem) =>
                    set((state: CartState) => ({
                        cart: [...state.cart, item],
                    })),
*/