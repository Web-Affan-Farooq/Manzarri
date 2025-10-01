"use server"
import sanityClient from "@/lib/sanity";

const BlockAccountAction = async (id:string, block:boolean) :Promise<
{
    message:string;
    success:boolean;
}>=> {
    await sanityClient.patch(id).set({ isBlocked: block }).commit();
    if (block) {
        return { message: "Account blocked successfully" , success:true };
    }
    else {
        return { message: "Account unblocked successfully", success:true };
    }
}
export default BlockAccountAction