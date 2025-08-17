import sanityClient from "@/lib/sanity";
import { VerifyUserResponse} from "@/@types/auth";

const VerifyUser = async (
    email: string
): Promise<VerifyUserResponse> => {
    /* ____ For verifying user in database ... */
    const q = `*[_type == "Accounts" && userEmail == "${email}"] {
        _id,
        userEmail,
        userPassword,
        userName,
        isAdmin,
    }`;

    const response = await sanityClient.fetch(q);

    if (response.length === 0) {
        return { exists: false, message: "User not found", user: null };
    }

    const user = response[0];
    return { user: user, message: "User exists", exists: true, };
};
export default VerifyUser;