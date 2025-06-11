export interface Notification {
    _key:string;
    notificationType: string;
    notificationText: string;
}
export interface Account {
    _id:string;
    isAdmin: boolean;
    userName: string;
    userEmail: string;
    userPassword: string;
    isBlocked:boolean;
    notifications: Notification[];
}