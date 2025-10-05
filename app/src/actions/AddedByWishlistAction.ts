"use server";

import sanityClient from "@/lib/sanity";
import GetTokenPayload from "@/utils/GetTokenPayload";
import PushNotificationAction from "./PushNotification";
import {v4} from "uuid";

const AddedByWishlistAction = async (
  id: string,
  productName:string,
  array: string[]
): Promise<{
  success: boolean;
  message: string;
}> => {
  
  const payload = await GetTokenPayload();
  if (!payload) {
    return {
      success: false,
      message: "please login first",
    };
  }
  const updatedList = [...array, payload.accountId];
  // ____ update in products ...
  try {
    await sanityClient
      .patch(id)
      .set({
        addedToWishlistBy: updatedList,
      })
      .commit();
      await PushNotificationAction({
        notification:{
          notificationText:`A user ${payload.accountId} had added ${productName} to wishlist at ${new Date().toLocaleString()}`,
          notificationTitle:"A new engagement in marketplace",
          notificationType:"Notify",
          isSeen:false,
          _id:v4(),
          userId:process.env.ADMIN_ACCOUNT_ID!
        }
      })
    return {
      success: true,
      message: "Product added to wishlist successfully",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "An error occured",
    };
  }
};

export default AddedByWishlistAction;
