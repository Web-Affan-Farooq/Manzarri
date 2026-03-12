import sanityClient from "@/lib/sanity";

export const UpdateActivity = async (id: string) => {
    /* ____ Update account activity in database */
    const date = new Date();
    await sanityClient.patch(id).set(
        {
            lastLogin: date.toISOString(),
        }
    ).commit();
}
