import axios from "axios";
import toast from "react-hot-toast";

/* _____ handle notification push logic ... */

interface RequiredNotificationData {
    userId: string,
    type: "Success" | "Failure" | "Warning",
    text: string,
    title: string,
}

const handleNotificationPush = async (data: RequiredNotificationData,) => {

    const response = await axios.post("/api/handle-notification", {
        data: data,
        option: "new"
    });
    if (response.status !== 200) {
        toast.error(response.statusText);
    }
}

const seenNotification = async (_id: string) => {
    const response = await axios.post("/api/handle-notification", {
        option: "seened",
        notification_id: _id,
    });
    if (response.status !== 200) {
        toast.error(response.statusText);
    }
}
const deleteNotification = async (_id: string) => {
    const response = await axios.post("/api/handle-notification", {
        option: "delete",
        notification_id: _id,
    });
    if (response.status !== 200) {
        toast.error(response.statusText);
    }
}
export {
    handleNotificationPush,
    seenNotification,
    deleteNotification,
};