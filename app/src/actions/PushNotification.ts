"use server"

import { Notification } from "@/@types/notifications";
import sanityClient from "@/lib/sanity";

const PushNotificationAction = async ({
    notification
}:{notification:Notification}):Promise<{
    success:boolean;
    message:string
}> => {
    try {
        const newNotification= {
            _type:"document",
            ...notification
        }
        await sanityClient.create(newNotification)

        return {
            success:true,
            message:"notification pushed"
        }
    } catch (err) {
        console.log(err)
        return {
            success:false,
            message:"notification pushed"
        }
    }
}
export default PushNotificationAction