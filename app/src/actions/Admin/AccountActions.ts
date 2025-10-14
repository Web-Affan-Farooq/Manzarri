"use server";
import sanityClient from "@/lib/sanity";
import GetTokenPayload from "@/utils/GetTokenPayload";
import { HandleNotificationPush } from "@/utils/PushNotifications";

const DeleteAccountAction = async (
  id: string
): Promise<{
  message: string;
  success: boolean;
  user?: {
    email: string;
    name: string;
  };
}> => {
  try {
    const tokenPayload = await GetTokenPayload();
    if (!tokenPayload) {
      return {
        message: "Unauthorized",
        success: false,
      };
    }

    const deletedAccount = await sanityClient.delete(id);
    const userName = deletedAccount.results[0].document.userName;
    const userEmail = deletedAccount.results[0].document.userEmail;

    const { createNotification } = new HandleNotificationPush(
      `${userName} leaved your store .`,
      `Please make sure to email ${userName} at ${userEmail} . `,
      true,
      "Notify"
    );
    createNotification();

    return {
      message: "Account deleted successfully",
      success: true,
      user: {
        email: userEmail,
        name: userName,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      message: "An error occured",
      success: false,
    };
  }
};

const BlockAccountAction = async (
  id: string,
  block: boolean
): Promise<{
  message: string;
  success: boolean;
}> => {
  await sanityClient.patch(id).set({ isBlocked: block }).commit();
  if (block) {
    return { message: "Account blocked successfully", success: true };
  } else {
    return { message: "Account unblocked successfully", success: true };
  }
};

export { DeleteAccountAction, BlockAccountAction };
