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
      .nonempty("At least one product must be included"),
    promoCode: z
      .string()
      .min(6,"Promo code must be 6 characters")
      .max(6,"Promo code must be 6 characters"),
  })
  .strict();

export default OfferSchema;
