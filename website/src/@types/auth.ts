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

    GenerateToken(): Promise<{
        message: string;
        success: boolean;
    }>;

    GenerateAdminToken(): Promise<{
        message: string;
        success: boolean;
    }>

    Signup(): Promise<{ message?: string; success: boolean } | {
        message?: string;
        success: string;
        redirect: "/profile";
        user: {
            name:string;
            email:string;
            isAdmin:boolean;
        }
    }>;

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