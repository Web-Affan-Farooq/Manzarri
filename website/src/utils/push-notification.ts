import axios from "axios";
import toast from "react-hot-toast";

/* _____ handle notification push logic ... */
const handleNotificationPush = async (userId:string, type: "Success" | "Failure" | "Warning", text: string) => {
    const response = await axios.post("/api/push-notification", {
        type: type,
        text: text,
        id: userId,
    });
    if (response.status !== 200) {
        toast.error(response.statusText);
    }
}
export default handleNotificationPush;