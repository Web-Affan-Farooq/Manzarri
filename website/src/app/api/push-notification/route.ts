import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Notification } from "@/@types/accounts";

export const POST = async (req: NextRequest) => {
    const { type, text, id } = await req.json();

    /* _____ Fetch required account ...*/
    const q = `*[_type] == "Accounts" && _id == ${id}]{notifications,}`; // _____ error ...
    const requiredAccount = await sanityClient.fetch(q);

    /* Fetch all the notifications in account , push a new one ... */
    const updatedNotifications: Notification[] = requiredAccount[0].notifications.push({
        notificationType: type,
        notificationText: text,
    });

    /* Send new notification list to server ... */
    await sanityClient.patch(id).set({ notifications: updatedNotifications }).commit();

    return NextResponse.json({ message: "Notification added" });
}