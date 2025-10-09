"use server"

import sanityClient from "@/lib/sanity"

const DeleteOrderAction = async (id:string):Promise<{
    message:string;
    success:boolean
}> => {
    try {
        await sanityClient.delete(id);
        return {
            message: "Order deleted successfully",
            success: true
        }
    } catch (err) {
        console.log(err);
        return {
            message: "An error occured",
            success: false
        }
    }
}
export {
    DeleteOrderAction
}