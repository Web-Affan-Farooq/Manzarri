"use server";

import sanityClient from "@/lib/sanity";


const DeleteFormSubmissionAction = async (id: string):Promise<{
  message:string;
  success:boolean
}> => {
  "use server";
  try {
    await sanityClient.delete(id);
    return {
      message: "Form submission deleted successfully",
      success: true
    }
  } catch (err) {
    console.log(err);
    return { 
      message: "An error occured",
      success: false
    }
  }
};

export default DeleteFormSubmissionAction;