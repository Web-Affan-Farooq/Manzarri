interface Account {
    _id:string;
    isAdmin: boolean;
    userName: string;
    userEmail: string;
    userPassword: string;
    isBlocked:boolean;
}
export type {
    Account
}