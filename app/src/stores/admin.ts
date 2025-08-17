import { create } from "zustand";

import { Account } from "@/@types/accounts";
import { Product } from "@/@types/product";
import { Order } from "@/@types/order";
import FormSubmission from "@/@types/FormSubmissions";
import { createJSONStorage, persist } from "zustand/middleware";

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
  accounts: Omit<Account, "userPassword">[];
  feedAccounts: (accounts: Account[]) => void;
  deleteAccount: (id: string) => void;
  blockAccount: (id: string, newBlockStatus: boolean) => void;
}
interface DashboardCache
  extends OrdersState,
    InventoryState,
    FormsubmissionState,
    AccountsState {}

const useDashboardCache = create<DashboardCache>()(
  persist(
    (set) => ({
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

      feedInventory: (list) =>
        set({
          inventory: list,
        }),
      /* _____ Form submissions ... */
      formSubmissions: [],
      feedFormSubmissions: (list) =>
        set(() => ({
          formSubmissions: list,
        })),

      /* _____ Orders ... */
      orders: [],
      feedOrders: (array) =>
        set(() => ({
          orders: array,
        })),
      deleteOrder: (order_id) =>
        set((state) => ({
          orders: state.orders.filter((order: Order) => order._id !== order_id),
        })),
    }),
    {
      name: "dashboard-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useDashboardCache;
// {
//   _id: "LawdNTrvHHM4It46HZsl6r",
//   _updatedAt: "2025-07-02T12:26:55Z",
//   amountPayable: 34,
//   packages: [
//     {
//       _key: "}2J|>kN_^i`,5OR_^ka*`n=$r9,_a(*^wTDWUh<;S@k^A2,MZp#GYeMhIT|[",
//       productId: "714e74aa-fe03-4c56-8724-57edea9e14ef",
//       productName: "Aurora Crystal Pendant Necklace",
//       productSKU: "#1",
//       quantity: 2,
//       size: "md"
//     },
//     {
//       _key: ".nEpQe]@@nwT4+t&u&T5!xRE?V-Ee>]hBom?G0Y~=&)Z}sbcMfWk%lQG2wz",
//       productId: "d5b7d0ed-6ecb-4884-9df1-aa88d29d7d76",
//       productName: "Aurora Crystal Pendant Necklace",
//       productSKU: "#1",
//       quantity: 3,
//       size: "lg"
//     }
//   ],
//   status: "Paid",
//   userId: null,
//   weightageInGrams: 210
// },
