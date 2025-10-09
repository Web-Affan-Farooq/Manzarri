"use server"
// _____ Types ...
import { Product } from "@/@types/product";
import sanityClient from "@/lib/sanity";

const DeleteProductAction = async (id: string) :Promise<{
    message:string;
    success:boolean 
}>=> {
  try {
    await sanityClient.delete(id);
    return {
      message: "Product deleted successfully",
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

const EditProductAction = async (product: Product):Promise<{
    message:string;
    success:boolean 
}> => {
  try {
    await sanityClient.patch(product._id).set(product).commit();
    return {
        message: "Product updated successfully",
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

export {
    DeleteProductAction,
    EditProductAction
}
