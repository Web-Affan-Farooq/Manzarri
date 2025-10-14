import sanityClient from "@/lib/sanity";
import { Notification } from "@/@types/notifications";

/* _____ handle notification push logic ... */

type NotificationType =
  | "Promotion"
  | "Order"
  | "Warning"
  | "Review"
  | "Product"
  | "Notify";

export class HandleNotificationPush {
  public title: string;
  public text: string;
  public pushToAdmin: boolean;
  public type: NotificationType;
  public userId?: string;

  constructor(
    title: string,
    text: string,
    pushToAdmin: boolean,
    type: NotificationType,
    userId?: string
  ) {
    this.title = title;
    this.text = text;
    this.pushToAdmin = pushToAdmin;
    this.type = type ;
    this.userId = userId;
  }

  // _____ Create notification ...
  createNotification = async (): Promise<{
    message: string;
    success: boolean;
    notification?: Notification;
  }> => {
    try {
      const newNotification = {
        _type: "Notifications",
        isSeen: false,
        notificationText: this.text,
        notificationTitle: this.title,
        notificationType: this.type,
        userId: {
          _type: "reference",
          _ref: this.pushToAdmin ? process.env.ADMIN_ACCOUNT_ID! : this.userId,
        },
      };

      const response = await sanityClient.create(newNotification);

      return {
        message: "Notification created successfully",
        success: true,
        notification: {
          notificationTitle: response.notificationTitle,
          notificationText: response.notificationText,
          notificationType: response.notificationType,
          isSeen: false,
          _id: response._id,
          userId: response.userId._ref!,
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

  // _____ Delete notification ...
  static deleteNotification = async (id:string):Promise<{
    message: string;
    success: boolean;
  }> => {
    try {
        await sanityClient.delete(id);
        return {
            message:"Notification deleted successfully",
            success:true
        }        
    } catch (err) {
        console.log(err);
        return {
            message:"An error occured",
            success:false
        }
    }
  };

  // _____ for seening notification ...
  static seenNotification = async (id:string):Promise<{
    message: string;
    success: boolean;
  }> => {
    try {
        await sanityClient.patch(id).set({
            isSeen:true,
        }).commit()

        return {
            message:"Notification seened successfully",
            success:true
        }
    } catch (err) {
        console.log(err);
        return {
            message:"Notification seened successfully",
            success:false
        }
    }
  }
}