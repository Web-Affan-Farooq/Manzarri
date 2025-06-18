import { useState } from "react";
import { useAccounts } from "@/stores/accounts";
import axios from "axios";
import toast from "react-hot-toast";
import handleNotificationPush from "@/utils/push-notification";

 const useAccountCard = ({ userId,isBlocked }: { userId: string; isBlocked: boolean }) => {

    const [deleteText, setdeleteText] = useState("");
    const { deleteAccount, blockAccount } = useAccounts();

    /* _____ handle account deletion ...*/
    const handleDelete = async () => {
        const authUserId = window.localStorage.getItem("userID");
        if (deleteText.trim() !== "" && authUserId) {
            const response = await axios.post("/api/Admin/delete-account", {
                id: userId,
                text: deleteText,
            });
            if (response.status !== 200) {
                toast.error(response.statusText);
            }
            toast.success("Account deleted successfully");
            deleteAccount(userId);
            handleNotificationPush(authUserId,"Warning",`Please make sure to email ${response.data.user.name} at ${response.data.user.email} . `)
        }
    }

    /* _____ handle block account logic ... */
    const handleAccountBlockandUnblock = async () => {
        const response = await axios.post("/api/Admin/block-account", {
            id: userId,
            block: !isBlocked,
        });
        if (response.status !== 200) {
            toast.error(response.statusText);
            return;
        }
        toast.success(response.data.message);
        blockAccount(userId, !isBlocked);
    }

    const handleDeleteInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setdeleteText(e.target.value);
    }

    return {
        handleDelete,
        handleAccountBlockandUnblock,
        handleDeleteInput,
    }
}

export default useAccountCard;