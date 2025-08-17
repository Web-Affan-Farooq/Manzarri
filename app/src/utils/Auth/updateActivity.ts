import sanityClient from "@/lib/sanity";

const UpdateActivity = async (id: string) => {
    const date = new Date();
    await sanityClient.patch(id).set(
        {
            lastLogin: date.toISOString(),
        }
    ).commit();
}
export default UpdateActivity;