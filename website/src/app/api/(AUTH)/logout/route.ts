/*____   
 route : /api/logout  
 method : GET
*/

import { NextResponse } from "next/server";
import { Logout } from "@/utils/Auth";

export const GET = async () => {
    const response = await Logout();

    /* ____ Error tracking ... */
    // console.log("Logout() =>  ", response);

    if (!response.success) {
        return NextResponse.json({
            success: false,
            message: response.message
        });
    }
    return NextResponse.json(response);
}