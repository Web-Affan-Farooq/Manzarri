"use server";

import sanityClient from "@/lib/sanity";

export const UpdateEngagementCount = async (offerId: string) => {
  await sanityClient
    .patch(offerId)
    .inc({ engagementCount: 1 }) // increments by 1
    .commit(); // don’t forget to commit
};
