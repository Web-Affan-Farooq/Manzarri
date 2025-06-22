import { useEffect, useState } from "react";
import FormSubmission from "@/@types/FormSubmissions";
import sanityClient from "@/lib/sanity";

const useFormSubmission = () => {
  const [data, setdata] = useState<FormSubmission[]>([]);

  useEffect(() => {
    const getData = async () => {
        const q = `*[_type == "FormSubmissions"]{
    _id,
    customerEmail,
    customerMessage,
    customerName,
    userPhonenumber,
    _updatedAt,
  } | order(_updatedAt desc)`

  const data: FormSubmission[] = await sanityClient.fetch(q,{},{
    next:{
      revalidate:30
    }
  });
  setdata(data);
    }
    getData();
  },[]);
  
  return {
    data,
  }
}
export default useFormSubmission;