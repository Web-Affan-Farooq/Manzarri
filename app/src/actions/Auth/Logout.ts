"use server"
import { cookies } from "next/headers";
import { token } from "@/constants";

const LogoutAction = async () => {
    const clientCookies = await cookies();
    const userToken = clientCookies.get(token.user)?.value;
    const adminToken = clientCookies.get(token.admin)?.value;
    if (userToken) {
        clientCookies.delete(token.user);
    }
    if (adminToken) {
        /* Admin has two tokens ... one for viewing his profile as user and other for admin authorization */
        clientCookies.delete(token.admin);
        clientCookies.delete(token.user);
    }

    return{
            message: "Logout successfull",
            redirect: "/marketplace"
        }
}
export default LogoutAction