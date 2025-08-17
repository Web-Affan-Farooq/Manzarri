/*____   
 route : /api/logout  
 method : GET
*/

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async () => {
    const clientCookies = await cookies();
    const userToken = clientCookies.get("manzarri-authorization-token")?.value;
    const adminToken = clientCookies.get("manzarri-admin-authorization-token")?.value;
    if (userToken) {
        clientCookies.delete("manzarri-authorization-token");
    }
    if (adminToken) {
        /* Admin has two tokens ... one for viewing his profile as user and other for admin authorization */
        clientCookies.delete("manzarri-authorization-token");
        clientCookies.delete("manzarri-admin-authorization-token");
    }

    return NextResponse.json(
        {
            message: "Logout successfull",
            redirect: "/marketplace"
        }, {
        status: 200
    }
    )
}