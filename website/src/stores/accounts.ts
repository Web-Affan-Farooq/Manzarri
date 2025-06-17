// import { create } from "zustand";
// import { Account } from "@/@types/accounts";
// interface AccountsState {
//     accounts: Account[];
//     feedAccounts: (accounts: Account[]) => void;
//     deleteAccount:(id:string) => void;
//     blockAccount:(id:string, isAlreadyBlocked:boolean) => void;
// }

// export const useAccounts = create<AccountsState>((set) => ({
//     accounts: [],
//     feedAccounts: (accounts) => set({
//         accounts: accounts
//     }),
//     deleteAccount:(id) => set((state) => (
//         {
//             accounts:state.accounts.filter((acc) => {
//                 return acc._id !== id;
//             }),
//         }
//     )),
//     blockAccount:(id,isAlreadyBlocked) => set((state) => (
//         {
//             accounts:state.accounts.map((acc:Account) => (
//                 acc._id === id ? {...acc,isBlocked:isAlreadyBlocked} : acc
//             ))
//         }
//     ))
// }));


import { create } from "zustand";
import { Account } from "@/@types/accounts";

interface AccountsState {
    accounts: Account[];
    feedAccounts: (accounts: Account[]) => void;
    deleteAccount: (id: string) => void;
    blockAccount: (id: string, newBlockStatus: boolean) => void;
}

export const useAccounts = create<AccountsState>((set) => ({
    accounts: [],

    feedAccounts: (accounts) => set({ accounts }),

    deleteAccount: (id) =>
        set((state) => ({
            accounts: state.accounts.filter((acc) => acc._id !== id),
        })),

    blockAccount: (id, newBlockStatus) =>
        set((state) => ({
            accounts: state.accounts.map((acc) =>
                acc._id === id ? { ...acc, isBlocked: newBlockStatus } : acc
            ),
        })),
}));
