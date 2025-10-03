// _____ Note : Just created for now , not used in app ...
"use server";
import sanityClient from "@/lib/sanity";
import GetTokenPayload from "@/utils/GetTokenPayload";
import { ProfileData } from "@/@types/profiledata";
import { Notification } from "@/@types/notifications";

const FetchNotificationAction = async (id: string) : Promise<Notification[] | null> => {
  const notificationQuery = `*[_type == "Notifications" &&  userId=="${id}"]{
        _id,
  isSeen,
    "date":_updatedAt,
notificationText,
notificationTitle,
notificationType,
userId
}`;

  try {
    const notifications = await sanityClient.fetch(
    notificationQuery,
    {},
    { next: { revalidate: 60 } }
  );
  return notifications;
  } catch (err) {
    console.log(err)
    return null
  }
};

const FetchProfileAction = async (): Promise<{
  message: string;
  success: boolean;
  info?: ProfileData;
  redirect?: "/login";
}> => {
  const payload = await GetTokenPayload();
  if (!payload) {
    return {
      message: "Unauthorized",
      success: false,
      redirect: "/login",
    };
  }
  try {
    const [response] =
      await sanityClient.fetch(`*[_type == "Accounts" && _id =="${payload.accountId}"] {
  _id,
_updatedAt,
invited,
isAdmin,
isBlocked,
lastLogin,
userEmail,
userName,
}`);

    return {
      success: true,
      message: "",
      info: response,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "An error occured",
      success: false,
    };
  }
};


export {
    FetchNotificationAction,
    FetchProfileAction
}