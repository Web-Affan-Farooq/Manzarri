import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { handleNotificationPush } from "@/utils/PushNotifications";
import useDashboardCache from "@/stores/admin";

const useAccountCard = ({ userId, isBlocked }: { userId: string; isBlocked: boolean }) => {

    const [deleteText, setdeleteText] = useState("");
    const { deleteAccount, blockAccount } = useDashboardCache();

    /* _____ handle account deletion ...*/
    const handleDelete = async () => {
        // const authUserId = window.localStorage.getItem("userID");
        if (deleteText.trim() !== "") {
            const response = await axios.post("/api/Admin/delete-account", {
                id: userId,
                text: deleteText,
            });
            if (response.status !== 200) {
                toast.error(response.statusText);
            }
            toast.success("Account deleted successfully");
            deleteAccount(userId);
            handleNotificationPush({
                userId: userId,
                text: `Please make sure to email ${response.data.user.name} at ${response.data.user.email} . `,
                type: "Success",
                title: "User account deleted"
            })
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