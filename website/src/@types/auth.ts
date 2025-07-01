export interface Authentication {
    name?: string;
    email: string;
    password: string;
    VerifyUser(): Promise<{ message: string; success: boolean } | {
        success: boolean, user: {
            userName: string;
            userPassword: string;
            userEmail: string;
            isAdmin: boolean;
            _id: string;
        }
    }>;

    SendAuthToken(forAdmin: boolean): Promise<{
        success: boolean;
    }>

    Signup(): Promise<{ message: string; success: boolean } | {
        message: string;
        success: boolean;
        redirect: "/profile";
        user: {
            user_id:string;
            name: string;
            email: string;
            isAdmin: boolean;
            isBlocked: boolean;
        }
    }>;

    SanitizeData(data: { name?: string; email: string; password: string; }): { success: false, message: string } | { success: true };

    Login(): Promise<
        { message?: string; success: boolean } |
        {
            message: string;
            success: true;
            user: {
                _id: string;
                userName: string;
                userEmail: string;
                userRole: boolean;
            };
        }
    >;

}
