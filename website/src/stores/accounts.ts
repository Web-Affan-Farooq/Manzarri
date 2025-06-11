import { create } from "zustand";
import { Account } from "@/@types/accounts";
interface AccountsState {
    accounts: Account[];
    feedAccounts: (accounts: Account[]) => void;
}

export const useAccounts = create<AccountsState>((set) => ({
    accounts: [],
    feedAccounts: (accounts) => set({
        accounts: accounts
    }),
}));