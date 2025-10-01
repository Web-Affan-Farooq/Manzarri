"use server"
import sanityClient from "@/lib/sanity";


const DeleteAccountAction = async (id:string) :Promise<
{
    message:string;
    success:boolean;
    user?: {
        email:string;
        name:string;
    }
}> => {
   try {
     const deletedAccount = await sanityClient.delete(id);
    return {
        message:"Account deleted successfully",
        success:true,
         user:{
        email:deletedAccount.results[0].document.userEmail,
        name:deletedAccount.results[0].document.userName,
    }};
   } catch (err) {
    console.log(err)
    return {
        message:"An error occured",
        success:false
    }
   }
}
export default DeleteAccountAction