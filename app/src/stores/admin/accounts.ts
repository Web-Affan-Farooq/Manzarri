import { create } from "zustand";
import { Account } from "@/@types/accounts";
import { createJSONStorage, persist } from "zustand/middleware";
import sanityClient from "@/lib/sanity";
import { toast } from "sonner";
import {
  DeleteAccountAction,
  BlockAccountAction,
} from "@/actions/Admin/AccountActions";

interface AccountsState {
  accounts: Omit<Account, "userPassword">[];
  fetchAccounts: () => void;
  deleteAccount: (id: string) => void;
  accountBlockAndUnblock: (id: string, newBlockStatus: boolean) => void;
}

/* ____ Fetch accounts ... */
const getAccounts = async () => {
  try {
    const q = `
    *[_type == "Accounts"] {
  _id,
  userEmail,
  userName,
  isBlocked,
  isAdmin,
}
    `;
    const response: Account[] = await sanityClient.fetch(q);
    return response;
  } catch (err) {
    console.log(err);
    toast.error("An error occured");
  }
};

const useAccounts = create<AccountsState>()(
  persist(
    (set) => ({
      accounts: [],
      fetchAccounts: async () => {
        return set({
          accounts: await getAccounts(),
        });
      },
      deleteAccount: async (id) => {
        const { success, message } = await DeleteAccountAction(id);
        if (!success) {
          return toast.error(message);
        }
        toast.success(message);
        return set((state) => ({
          accounts: state.accounts.filter((acc) => acc._id !== id),
        }));
      },

      accountBlockAndUnblock: async (id, newBlockStatus) => {
        const { message, success } = await BlockAccountAction(
          id,
          !newBlockStatus
        );

        if (!success) {
          toast.error(message);
          return;
        }
        toast.success(message);
        set((state) => ({
          accounts: state.accounts.map((acc) =>
            acc._id === id ? { ...acc, isBlocked: newBlockStatus } : acc
          ),
        }));
      },
    }),
    {
      name: "accounts-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default useAccounts;
