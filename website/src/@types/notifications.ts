interface Notification {
    _id?: string;
    _type?: string;
    notificationTitle: string;
    notificationText: string;
    notificationType: "Success" | "Failure" | "Warning";
    isSeen: boolean;
    userId: string;
}
export type {
    Notification,
}