import sanityClient from "@/lib/sanity";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { data, option, notification_id} = await req.json();
    if (option.toLowerCase() === "seened") {
        await sanityClient.patch(notification_id).set({
            isSeen: true,
        }).commit();
        return NextResponse.json({ message: "Notification seened" });
    }
    else if (option.toLowerCase() === "delete") {
        await sanityClient.delete(notification_id);
    }
    else if (option === "new") {
        const newNotification = {
            _type: "Notification",
            notificationText: data.text,
            notificationTitle: data.title,
            userId: data.user_id,
            isSeen: false,
            notificationType: data.type
        }
        await sanityClient.create(newNotification)
    }

    return NextResponse.json({ message: "Notification added" });
}