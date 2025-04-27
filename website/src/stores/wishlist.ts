import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistItem {
    id: number;    
    image:string;
    name: string;
    price: number;
}

interface WishlistState {
    wishlist: WishlistItem[];
    addItem: (item: WishlistItem) => void;
    deleteItem: (item: WishlistItem) => void;
    clearWishlist: () => void;
}

export const useWishlist = create<WishlistState>()(
    // persist(
        (set) => (
            {
                wishlist: [
                    { id: 1, name: "Elegant Earrings", price: 25, image:"/images/earrings/1.jpeg" },
                    { id: 2, name: "Stylish Ring", price: 45, image:"/images/earrings/1.jpeg" },
                    { id: 3, name: "Gold Necklace dfjkdljfklsdjflkjdkfjsdkfj", price: 80 , image:"/images/earrings/1.jpeg"},
                    { id: 4, name: "Gold Necklace", price: 80 , image:"/images/earrings/1.jpeg"},
                ],

                addItem: (item: WishlistItem) =>
                    set((state: WishlistState) => ({
                        wishlist: [...state.wishlist, item],
                    })),

                deleteItem: (item) =>
                    set((state) => ({
                        wishlist: state.wishlist.filter((wishlistitem) => wishlistitem.id !== item.id),
                    })),

                clearWishlist: () =>
                    set(() => ({
                        wishlist: [],
                    })),

            }
        )
    //     {
    //         name: "manzarri-wishlist",
    //     }
    // )
);
