"use client";

// _____ Hooks ...
import React from "react";
import { useForm } from "react-hook-form";
import { useOffers } from "@/stores/admin/offer";

// _____ Types and schemas ...
import { EditOfferDetailsSchema } from "@/validations/EditOfferSchema";
import { Offer } from "@/@types/offer";
// _____ Libraries ...
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// _____ Components ...
import { SquarePen } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type FormData = z.infer<typeof EditOfferDetailsSchema>;

export const EditDetails = ({ offer }: { offer: Offer }) => {
  /**
   * In this component , we are using the react hook form only for validation ,
   * on form submission , we are going to submit the updatedData state ...
   */

  const { editOffer } = useOffers();

  // ______ react hook form ...
  const {
    getValues,
    formState: { errors, isSubmitting },
    reset,
    register,
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(EditOfferDetailsSchema),
    defaultValues: {
      offerName: offer.offerName,
      offerValidity: offer.offerValidity,
      discountPercentage: offer.discountPercentage,
      promoCode: offer.promoCode,
      offerDescription: offer.offerDescription,
    },
  });

  // _____ Submit handler ...
  const SubmitForm = async (formData: FormData) => {
    const changes: Partial<Offer> = {};

    // safely collect changed fields only
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      const newVal = formData[key];
      const oldVal = offer[key as keyof Offer];

      // avoid sending unchanged values
      if (newVal !== oldVal) {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (changes as any)[key] = newVal;
      }
    });

    // only update if something changed
    if (Object.keys(changes).length > 0) {
      editOffer(offer._id, changes);
      reset(formData);
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="cursor-pointer flex justify-center items-center p-3 rounded-md bg-gray-900">
          <SquarePen className="size-4 stroke-blue-600" />
        </AlertDialogTrigger>

        <AlertDialogContent className="bg-black/1 backdrop-blur-md border-none">
          <form className="p-8 rounded-lg shadow-xl space-y-5">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-bold text-[20px]">
                Edit offer details
              </AlertDialogTitle>
              <AlertDialogDescription className="hidden">
                Add new note
              </AlertDialogDescription>
            </AlertDialogHeader>

            {/* Offer Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Offer Name
              </label>
              <input
                type="text"
                {...register("offerName")}
                className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.offerName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.offerName.message}
                </p>
              )}
            </div>

            {/* Discount Percentage */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Discount (%)
              </label>
              <input
                type="number"
                {...register("discountPercentage", { valueAsNumber: true })}
                className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.discountPercentage && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.discountPercentage.message}
                </p>
              )}
            </div>

            {/* Offer Validity */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Validity Date
              </label>
              <input
                type="date"
                {...register("offerValidity")}
                className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.offerValidity && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.offerValidity.message}
                </p>
              )}
            </div>

            {/* Promo Code */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Promo Code
              </label>
              <input
                type="text"
                {...register("promoCode")}
                className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.promoCode && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.promoCode.message}
                </p>
              )}
            </div>

            {/* Offer Description */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Offer Description
              </label>
              <textarea
                {...register("offerDescription")}
                className="w-full h-[150px] md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
              {errors.offerDescription && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.offerDescription.message}
                </p>
              )}
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer transition-all duration-200 ease-in-out text-sm bg-indigo-400/20 border-none px-[20px] rounded-md py-[5px] text-red-600 hover:text-white">
                Cancel
              </AlertDialogCancel>

              <AlertDialogAction
                type="button"
                disabled={isSubmitting}
                onClick={() => SubmitForm(getValues())}
                className={`cursor-pointer transition-all duration-200 ease-in-out text-sm bg-indigo-400/20 border-none px-[20px] rounded-md py-[5px] text-indigo-600 hover:text-white ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isSubmitting ? "Editing..." : "Commit changes"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
