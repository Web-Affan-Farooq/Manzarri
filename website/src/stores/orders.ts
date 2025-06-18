import { OrderDetails} from "@/@types/order";
import {create} from "zustand";

interface OrderState {
    orders:OrderDetails[];
    feedOrders:(array:OrderDetails[]) => void;
    deleteOrder:(order_id:string) => void;
}

export const useOrders = create<OrderState>((set) => (
    {
        orders:[],
        feedOrders:(array) => set(() => (
            {
                orders:array
            }
        )),
        deleteOrder:(order_id) => set((state) => (
            {
                orders:state.orders.filter((order:OrderDetails) => order._id !== order_id)
            }
        )),
    }
));
