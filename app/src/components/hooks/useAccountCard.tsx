import { useState } from "react";
import useAccounts from "@/stores/admin/accounts";

const useAccountCard = ({
  userId,
  isBlocked,
}: {
  userId: string;
  isBlocked: boolean;
}) => {
  const [deleteText, setdeleteText] = useState("");
  const { deleteAccount, accountBlockAndUnblock } = useAccounts();

  /* _____ handle account deletion ...*/
  const handleDelete = async () => {
    if (deleteText.trim() !== "") {
      deleteAccount(userId);
    }
  };

  /* _____ handle block account logic ... */
  const handleAccountBlockandUnblock = async () => {
    accountBlockAndUnblock(userId, !isBlocked);
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
