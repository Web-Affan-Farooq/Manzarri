import { create } from "zustand";
import FormSubmission from "@/@types/FormSubmissions";
import { createJSONStorage, persist } from "zustand/middleware";
import sanityClient from "@/lib/sanity";
import { toast } from "sonner";
import DeleteFormSubmissionAction from "@/actions/Admin/FormSubmissions";

interface FormsubmissionState {
  formSubmissions: FormSubmission[];
  fetchFormSubmissions: () => void;
  deleteSubmission: (id: string) => void;
}

/* ____ Fetch form submissions ... */
const getFormSubmissions = async () => {
  try {
    const q = `*[_type == "FormSubmissions"]{
    _id,
    customerEmail,
    customerMessage,
    customerName,
    userPhonenumber,
    _updatedAt,
  } | order(_updatedAt desc)`;

    const response: FormSubmission[] = await sanityClient.fetch(q);
    return response;
  } catch (err) {
    console.log(err);
    toast.error("An error occured");
  }
};

/* _____ Global form submission state ... */
const useFormSubmissions = create<FormsubmissionState>()(
  persist(
    (set) => ({
      formSubmissions: [],
      fetchFormSubmissions: async () => {
        return set({
          formSubmissions: await getFormSubmissions(),
        });
      },
      deleteSubmission: async (id) => {
        // ____ Call the server action  ...
        const {success ,message} = await DeleteFormSubmissionAction(id);
        if (!success) {
          toast.error(message);
        }
        // ____ Update the state   ...
        return set((state) => ({
          formSubmissions: state.formSubmissions.filter((f) => f._id !== id),
        }));
      },
    }),
    {
      name: "form-submission-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useFormSubmissions;
