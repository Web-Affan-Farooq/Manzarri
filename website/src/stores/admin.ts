import { create } from "zustand";
import { Account } from "@/@types/accounts";
import { Product } from "@/@types/product";
import { Order } from "@/@types/order";
import FormSubmission from "@/@types/FormSubmissions";

interface OrdersState {
    orders: Order[];
    deleteOrder: (order_id: string) => void;
    feedOrders: (array: Order[]) => void;
}
interface InventoryState {
    inventory: Product[];
    feedInventory: (list: Product[]) => void;
}
interface FormsubmissionState {
    formSubmissions: FormSubmission[];
    feedFormSubmissions: (list: FormSubmission[]) => void;
}
interface AccountsState {
    accounts: Account[];
    feedAccounts: (accounts: Account[]) => void;
    deleteAccount: (id: string) => void;
    blockAccount: (id: string, newBlockStatus: boolean) => void;
}
interface DashboardCache extends OrdersState, InventoryState, FormsubmissionState, AccountsState { }

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

        /* _____ Form submissions ... */
        formSubmissions: [],
        feedFormSubmissions: (list) => set(() => (
            {
                formSubmissions: list,
            }
        )),

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
    }
));

export default useDashboardCache;