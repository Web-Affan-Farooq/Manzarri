import sanityClient from "@/lib/sanity";
import { AccountActivity, AccountPayload, Notification } from "../_types";

export const CreateAccount = async (data: AccountPayload) => {
    /* ______ Create account on signup ...*/
    const date = new Date();
    const createdAccount = await sanityClient.create(data);

    const userAccountActivity: AccountActivity = {
        _type: "AccountActivity",
        userId: createdAccount._id,
        lastLogin: date.toISOString(),
        orders: []
    }
    const successNotification: Notification = {
        _type: "Notifications",
        userId: createdAccount._id,
        notificationTitle: "Welcome onboard",
        notificationText: `Welcome ${data.userName} , browse products and explore our marketplace`,
        notificationType: "Success",
        isSeen: false,
    }

    await sanityClient.create(userAccountActivity)

    await sanityClient.create(successNotification);

    return createdAccount;
}
