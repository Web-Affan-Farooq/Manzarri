import { create } from "zustand";
import { Account } from "@/@types/accounts";
import { Product } from "@/@types/product";
import { Order } from "@/@types/order";
import FormSubmission from "@/@types/FormSubmissions";

interface DashboardCache {
    accounts: Account[];
    inventory: Product[];
    orders: Order[];
    formSubmissions: FormSubmission[];
    feedAccounts: (accounts: Account[]) => void;
    deleteAccount: (id: string) => void;
    blockAccount: (id: string, newBlockStatus: boolean) => void;
    feedInventory: (list: Product[]) => void;
    feedOrders: (array: Order[]) => void;
    deleteOrder: (order_id: string) => void;
    feedFormSubmissions: (list: FormSubmission[]) => void;
}


const useDashboardCache = create<DashboardCache>((set) => (
    {
        /* _____ Accounts ... */

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

        /* _____ Inventory ... */

        inventory: [],

        feedInventory: (list) => {
            return set({
                inventory: list,
            });
        },

        /* _____ Orders ... */

        orders: [],
        feedOrders: (array) => set(() => (
            {
                orders: array
            }
        )),
        deleteOrder: (order_id) => set((state) => (
            {
                orders: state.orders.filter((order: Order) => order._id !== order_id)
            }
        )),

        /** _____ Form submissions ... */
        formSubmissions: [],
        feedFormSubmissions: (list) => set(() => (
            {
                formSubmissions: list,
            }
        ))

    }
));

export default useDashboardCache;