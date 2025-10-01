import { useState } from "react";
import { toast } from "sonner";
import { handleNotificationPush } from "@/utils/PushNotifications";
import useDashboardCache from "@/stores/admin";
import DeleteAccountAction from "@/actions/DeleteAccountAction";
import BlockAccountAction from "@/actions/BlockAccountAction";

const useAccountCard = ({
  userId,
  isBlocked,
}: {
  userId: string;
  isBlocked: boolean;
}) => {
  const [deleteText, setdeleteText] = useState("");
  const { deleteAccount, blockAccount } = useDashboardCache();

  /* _____ handle account deletion ...*/
  const handleDelete = async () => {
    if (deleteText.trim() !== "") {
      const { message, success, user } = await DeleteAccountAction(userId);
      if (!success && !user) {
        toast.error(message);
      }

      toast.success(message);
      deleteAccount(userId);

      if (user) {
        handleNotificationPush({
          userId: userId,
          text: `Please make sure to email ${user.name} at ${user.email} . `,
          type: "Success",
          title: "User account deleted",
        });
      }
    }
  };

  /* _____ handle block account logic ... */
  const handleAccountBlockandUnblock = async () => {
    const { message, success } = await BlockAccountAction(userId, !isBlocked);

    if (!success) {
      toast.error(message);
      return;
    }
    toast.success(message);
    blockAccount(userId, !isBlocked);
  };

  const handleDeleteInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdeleteText(e.target.value);
  };

  return {
    handleDelete,
    handleAccountBlockandUnblock,
    handleDeleteInput,
  };
};

export default useAccountCard;
