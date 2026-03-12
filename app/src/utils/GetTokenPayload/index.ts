import { cookies } from "next/headers"
import { TokenPayload } from "@/@types/Auth";
import { token as t } from "@/constants";
import jwt from "jsonwebtoken";

type Obj =  TokenPayload & {
    isAdmin:boolean
}

const GetTokenPayload = async ():Promise<Obj | null> => {
    const clientCookies = await cookies();
    const adminToken = clientCookies.get(t.admin)?.value;
    const userToken =  clientCookies.get(t.user)?.value;

    if(adminToken) {
        const adminPayload  = jwt.verify(adminToken,process.env.JWT_SECRET_TOKEN!) as TokenPayload;

        return {
            ...adminPayload,
            isAdmin:true,
        }
    }
    
    else if(userToken) {
        const userPayload  = jwt.verify(userToken,process.env.JWT_SECRET_TOKEN!) as TokenPayload;
        return {
            ...userPayload,
            isAdmin:false,
        }
    }
    else {
        return null
    }
}
export default GetTokenPayload