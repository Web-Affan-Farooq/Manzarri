export interface Authentication {
    name?: string;
    email: string;
    password: string;
    secret?: string | undefined;
    VerifyUser(): Promise<{ message: string; success: boolean } | {
        success: boolean, user: {
            userName: string;
            userPassword: string;
            userEmail: string;
            _id: string;
        }
    }>;
    VerifyWorker(): Promise<{ message: string; success: boolean } | {
        success: boolean, user: {
            userName: string;
            userPassword: string;
            userEmail: string;
            _id: string;
        }
    }>;
    VerifyAdmin(): Promise<{ message: string; success: boolean } | {
        success: boolean, user: {
            userName: string;
            userPassword: string;
            userEmail: string;
            _id: string;
        }
    }>;
    GenerateToken(): Promise<{
        message: string;
        success: boolean;
    }>;
    GenerateWorkerToken(): Promise<
        {
            message: string;
            success: boolean;
        }>;
    GenerateAdminToken(): Promise<{
        message: string;
        success: boolean;
    }>

    SignupCustomer(): Promise<{ message?: string; success: boolean } | {
        message?: string;
        success: string;
        redirect: "/profile";
    }>;

    SignupWorker(): Promise<{ message?: string; success: boolean } | {
        message?: string;
        success: string;
        redirect: "/Dashboard";
    }>;

    SignupAdmin(): Promise<{ message?: string; success: boolean } | {
        message?: string;
        success: string;
        redirect: "/Admin";
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