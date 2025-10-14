"use server";

import sanityClient from "@/lib/sanity";
import GetTokenPayload from "@/utils/GetTokenPayload";
import { HandleNotificationPush } from "@/utils/PushNotifications";

const AddedByWishlistAction = async (
  id: string,
  productName:string,
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
  // ____ update in products ...
  try {
   await sanityClient
      .patch(id)
      .setIfMissing({
        addedToWishlistBy: [],
      })
      .append("addedToWishlistBy", [
        {
          _type: "reference",
          _ref: payload.accountId,
        },
      ])
      .commit();
    // ____ Notifi admin about the action ...
    
    const notify = new HandleNotificationPush(
      "A new engagement in marketplace",
      `A user ${payload.accountId} had added ${productName} to wishlist at ${new Date().toLocaleString()}`,
      true,
      "Notify"
    );

    notify.createNotification();
    
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
