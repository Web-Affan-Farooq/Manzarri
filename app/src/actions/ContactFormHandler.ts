"use server"
import sanityClient from "@/lib/sanity";
import ContactFormSchema from "@/validations/ContactSchema";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    phonenumber: string;
}

const ContactFormHandler = async (body:ContactFormData) :Promise<{
    message:string;
    success:boolean
}> => {
    try {
        /* ____ Parse data and throw error if any .Then send message in sanity ... */
        const sanitizedData = ContactFormSchema.parse(body);

        await sanityClient.create({
            _type: "FormSubmissions",
            customerName: sanitizedData.name,
            customerEmail: sanitizedData.email,
            userPhonenumber: sanitizedData.phonenumber,
            customerMessage: sanitizedData.message,
        }).then(() => {
        }).catch((err) =>
           {
             console.log(err)
            return { message: "Error while sending message", success:false }
           }
        )
        return { message: "Message sent" , success:true }
    } catch (err) {
        console.log(err);
        return { message: "Error while sending message" , success:false }
    }
};
export default ContactFormHandler