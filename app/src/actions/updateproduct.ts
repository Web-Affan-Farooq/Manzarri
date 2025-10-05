"use server";

import sanityClient from "@/lib/sanity";

export const updateProducts = async () => {
  const products: { _id: string }[] = await sanityClient.fetch(
    `*[_type == "Product"] {_id}`
  );
  await Promise.all(
    products.map(async (p) => {
    console.log(`----------------Updating product : ${p._id} ---------------------------`)
        await sanityClient
        .patch(p._id)
        .set({ addedToCartBy: [], addedToWishlistBy: [] })
        .commit();
    console.log(`----------------Updated product successfully: ${p._id} ---------------------------`)
    })
  );
};

