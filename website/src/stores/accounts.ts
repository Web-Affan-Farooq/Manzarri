import { create } from "zustand";
import { Account } from "@/@types/accounts";
interface AccountsState {
    accounts: Account[];
    feedAccounts: (accounts: Account[]) => void;
    deleteAccount:(id:string) => void;
}

export const useAccounts = create<AccountsState>((set) => ({
    accounts: [],
    feedAccounts: (accounts) => set({
        accounts: accounts
    }),
    deleteAccount:(id) => set((state) => (
        {
            accounts:state.accounts.filter((acc) => {
                return acc._id !== id;
            }),
        }
    ))
}));