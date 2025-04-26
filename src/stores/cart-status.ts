import { create } from "zustand";

interface CartVisibilityStatus {
    status: boolean;
    toogleStatus: () => void;
}

export const useCartVisibilityStatus = create<CartVisibilityStatus>((set) => ({
    status: false,
    toogleStatus: () => set((state) => ({
        status: !state.status
    }))
}));
