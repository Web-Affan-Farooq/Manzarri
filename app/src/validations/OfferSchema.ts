import { z } from "zod";

const OfferSchema = z
  .object({
    discountPercentage: z
      .number({ message: "Invalid number" })
      .min(1, "Discount must be at least 1%")
      .max(100, "Discount cannot exceed 100%"),
    offerName: z
      .string({ message: "invalid name" })
      .min(3, "Offer name must be at least 3 characters long"),
    offerValidity: z
      .string({ message: "invalid date" })
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Invalid date format for offer validity"
      ),
            offerDescription:z.string({message:"invalid description"}).min(20,"Minimum 20 characters required").max(100,"Maximum 100 characters allowed"),      
    products: z
      .array(z.string())
      .min(6, "Please select atleast 6 products")
      .max(6, "Please select atleast 6 products"),
    promoCode: z
      .string({
        message: "Invalid promocode",
      })
      .min(6, "Promo code must be 6 characters")
      .max(6, "Promo code must be 6 characters"),
    offerHeadline: z
      .string({
        message: "Invalid promocode",
      })
      .min(10, "Minimun 10 characters required")
      .max(50, "Maximum 50 characters required"),
    bannerImage: z
      .any()
      .refine((files) => files?.length === 1, "Please upload a banner image")
      .refine(
        (files) => files?.[0]?.type.startsWith("image/"),
        "Only image files are allowed"
      ),
  })
  .strict();

export default OfferSchema;
