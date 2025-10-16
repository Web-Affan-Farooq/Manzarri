import { toast } from "sonner";
import { create } from "zustand";
import { Invite } from "@/@types/invite";
import {
  InviteUserAction,
  FetchInvites,
  DeleteInviteAction,
} from "@/actions/Admin/InviteActions";

interface InviteState {
  invites: Invite[];
  createNewInvite: () => void;
  fetchInvites: () => void;
  deleteInvite: (id: string) => void;
}

export const useInvite = create<InviteState>()((set) => ({
  invites: [],
  createNewInvite: async () => {
    const { message, success, invite } = await InviteUserAction();
    if (!success) {
      toast.error(message);
    }
    if (invite) {
      toast.success("Please copy the credentials and send them to invitee");
      set((state) => ({
        invites: [...state.invites, { ...invite }],
      }));
    }
  },
  fetchInvites: async () => {
    try {
      const response = await FetchInvites();
      return set({
        invites: response,
      });
    } catch (err) {
      console.log(err);
      toast.error("An error occured");
    }
  },
  deleteInvite: async (id) => {
    const { message, success } = await DeleteInviteAction(id);
    if (!success) {
      toast.success(message);
    }
    toast.success("Invite deleted successfully");
    return set((state) => ({
      invites: state.invites.filter((invite) => invite._id !== id),
    }));
  },
}));
