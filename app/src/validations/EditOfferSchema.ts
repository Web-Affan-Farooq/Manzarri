import { z } from "zod";

export const EditOfferDetailsSchema = z
  .object({
    _id: z.string(),
    assetId: z.string(),
    discountPercentage: z
      .number()
      .min(1, "Discount must be at least 1%")
      .max(100, "Discount cannot exceed 100%"),
    offerName: z
      .string()
      .min(3, "Offer name must be at least 3 characters long"),
    offerValidity: z
      .string()
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Invalid date format for offer validity"
      ),
      offerDescription:z.string({message:"invalid description"}).min(20,"Minimum 20 characters required").max(100,"Maximum 100 characters allowed"),
    promoCode: z
      .string()
      .min(6, "Promo code must be 6 characters")
      .max(6, "Promo code must be 6 characters"),
    isActive: z.boolean(),
    engagementCount: z.number(),
  })
  .strict();

export const EditOfferBannerImageSchema = z
  .object({
    _id: z.string(),
    assetId: z.string(),
    bannerImage: z
      .any()
      .refine((files) => files?.length === 1, "Please upload a banner image")
      .refine(
        (files) => files?.[0]?.type.startsWith("image/"),
        "Only image files are allowed"
      ),
  })
  .strict();

export const EditOfferProducts = z
  .object({
    _id: z.string(),
    assetId: z.string(),

    products: z
      .array(z.string())
      .min(6, "Please select atleast 6 products")
      .max(6, "Please select atleast 6 products"),
  })
  .strict();

export const EditUnionSchema = z.object({}).strict()
.merge(EditOfferDetailsSchema)
.merge(EditOfferBannerImageSchema)
.merge(EditOfferProducts)

export type EditOfferData =Partial<z.infer<typeof EditUnionSchema>>;

export type UpdatedOfferData = Partial<Omit<z.infer<typeof EditUnionSchema>, "_id" | "assetId">>;