import { z } from "zod";

const OfferSchema = z
  .object({
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
    products: z
      .array(z.string())
      .min(6, "Please select atleast 6 products")
      .max(6, "Please select atleast 6 products"),
    promoCode: z
      .string()
      .min(6, "Promo code must be 6 characters")
      .max(6, "Promo code must be 6 characters"),
    messageTitle: z
      .string()
      .min(10, "Minimun 10 characters required")
      .max(50, "Maximum 50 characters required"),
    messageDescription: z
      .string()
      .min(10, "Minimun 10 characters required")
      .max(150, "Maximum 50 characters required"),
bannerImage: z
  .any()
  .refine((files) => files?.length === 1, "Please upload a banner image")
  .refine(
    (files) =>
      files?.[0]?.type.startsWith("image/"),
    "Only image files are allowed"
  ),
  })
  .strict();

export default OfferSchema;
