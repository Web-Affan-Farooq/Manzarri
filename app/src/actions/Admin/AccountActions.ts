"use server";
import sanityClient from "@/lib/sanity";
import GetTokenPayload from "@/utils/GetTokenPayload";
import { handleNotificationPush } from "@/utils/PushNotifications";

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

    handleNotificationPush({
      userId: tokenPayload.accountId,
      text: `Please make sure to email ${deletedAccount.results[0].document.userName} at ${deletedAccount.results[0].document.userEmail} . `,
      type: "Success",
      title: "User account deleted",
    });

    return {
      message: "Account deleted successfully",
      success: true,
      user: {
        email: deletedAccount.results[0].document.userEmail,
        name: deletedAccount.results[0].document.userName,
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


const BlockAccountAction = async (id:string, block:boolean) :Promise<
{
    message:string;
    success:boolean;
}>=> {
    await sanityClient.patch(id).set({ isBlocked: block }).commit();
    if (block) {
        return { message: "Account blocked successfully" , success:true };
    }
    else {
        return { message: "Account unblocked successfully", success:true };
    }
}

export { DeleteAccountAction, BlockAccountAction };