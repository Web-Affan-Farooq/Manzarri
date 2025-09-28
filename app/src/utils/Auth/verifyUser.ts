import sanityClient from "@/lib/sanity";
import { VerifyUserResponse} from "@/@types/auth";
import Logger from "../Logger";
const logger = new Logger("/utils/verifyUser.ts")

const VerifyUser = async (
    email: string
): Promise<VerifyUserResponse> => {
      logger.log(9, "------------------- Running Verify user  -------------------","")
    /* ____ For verifying user in database ... */
    const q = `*[_type == "Accounts" && userEmail == "${email}"] {
        _id,
        userEmail,
        userPassword,
        userName,
        isAdmin,
    }`;

      logger.log(19, "------------------- Verifying  -------------------","")
    const response = await sanityClient.fetch(q);
      logger.log(22, "------------------- Verification data  -------------------",response)
    if (response.length === 0) {
      logger.log(25, "------------------- Verification error : user not found  -------------------","")
        return { exists: false, message: "User not found", user: null };
    }

    const user = response[0];
      logger.log(14, "------------------- Verifiication successfull  -------------------",user)
    return { user: user, message: "User exists", exists: true, };
};
export default VerifyUser;