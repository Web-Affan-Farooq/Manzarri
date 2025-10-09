import { Order } from "@/@types/order";
import { DeleteOrderAction } from "@/actions/Admin/OrdersAction";
import sanityClient from "@/lib/sanity";
import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface OrdersState {
  orders: Order[];
  deleteOrder: (order_id: string) => void;
  fetchOrders: () => void;
}

const getOrders = async () => {
  try {
    const q = `*[_type == "Orders"]{ 
   _id,
  _updatedAt,
  userId,
  amountPayable,
  status,
  weightageInGrams,
  packages
  }`;
    const response: Order[] = await sanityClient.fetch(q);
    return response;
  } catch (err) {
    console.log(err);
    toast.error("An error occured");
  }
};

const useOrders = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],

      // _____ Call this for refreshing state ...
      fetchOrders: async () => {
        return set({
          orders: await getOrders(),
        });
      },

      // _____ Call this for deleting order...
      deleteOrder: async (order_id) => {
      // _____ Call server action ...
        const { success, message } = await DeleteOrderAction(order_id);
        if (!success) {
          return toast.error(message);
        }
      // _____ Update the state ...
        toast.success(message);
        return set((state) => ({
          orders: state.orders.filter((order: Order) => order._id !== order_id),
        }));
      },
    }),
    {
      name: "orders-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default useOrders;
