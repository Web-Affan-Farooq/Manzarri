import { create } from "zustand";
import { Product } from "@/@types/product";

interface InventoryState {
    all: Product[];
    soldOut: Product[];
    lowStock: Product[];
    trending: Product[];
    topRated: Product[];
    feedInventory: (list: Product[], category: "All" | "SoldOut" | "LowStock" | "Trending" | "Toprated") => void;
}
export const useInventory = create<InventoryState>((set) => (
    {
        all: [],
        soldOut: [],
        lowStock: [],
        trending: [],
        topRated: [],
        feedInventory: (list, category) => {
            if (category === "All") {
                return set({
                    all: list,
                });
            }
            else if (category === "SoldOut") {
                return set({
                    soldOut: list,
                });
            }
            else if (category === "LowStock") {
                return set({
                    lowStock: list,
                });
            }
            else if (category === "Toprated") {
                return set({
                    topRated: list,
                });
            }
            else if (category === "Trending") {
                return set({
                    trending: list,
                });
            }
        }
    }
))  