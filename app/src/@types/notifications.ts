interface Notification {
    _id:string
      isSeen:boolean
notificationText:string
notificationTitle:string
notificationType:"Review" | "Promotion" | "Order" | "Product" | "Warning" | "Notify"
userId:string
}

export type {
    Notification
}