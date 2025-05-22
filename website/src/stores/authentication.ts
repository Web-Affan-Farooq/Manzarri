import { create } from "zustand";

/* ___ Interface for state ...*/
interface Authentication {
  authorized: boolean;
  switchAuthorized: () => void;
}

/* ___ Main hook...*/
export const useAuth = create<Authentication>((set) => ({
  authorized: false,
  switchAuthorized: () => set((state) => ({ authorized: !state.authorized })),
}));