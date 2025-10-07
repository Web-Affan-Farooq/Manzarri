"use client";

// ____ Hooks ...
import { useForm } from "react-hook-form";
import { useState } from "react";

// ____ Libraries...
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// ____ Types and schemas ...
import OfferSchema from "@/validations/OfferSchema";

// ____ Components ...
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
import { Plus } from "lucide-react";
import useDashboardCache from "@/stores/admin";
import { Checkbox } from "@/components/ui/checkbox";

// _____ Type of form ...
type OfferFormData = z.infer<typeof OfferSchema>;

const CreateEvent = () => {
  // ____ getting products form global state ...
  const { inventory } = useDashboardCache();

  // ____ For storing selected products ...
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  // ____ React hook form ...
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OfferFormData>({
    resolver: zodResolver(OfferSchema),
    mode: "onChange",
    defaultValues: {
      products: selectedProducts,
    },
  });

  const onSubmit = (data: OfferFormData) => {
    const formatted = {
      ...data,
      products: data.products.map((p) => p.trim()),
    };
    console.log(formatted);
    toast.success("Offer created!");
    reset();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer flex flex-row flex-nowrap justify-center items-center gap-[10px] my-5 px-[20px] py-[10px] rounded-md bg-gray-900">
        <Plus className="size-5" />
        <span className="text-sm">Create offer</span>
      </AlertDialogTrigger>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <AlertDialogContent className="bg-black/1 backdrop-blur-md border-none">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Create New Offer
            </AlertDialogTitle>
            <AlertDialogDescription className="hidden">
              Create a new offer on the website
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Offer Name
            </label>
            <input
              type="text"
              {...register("offerName")}
              className="w-full p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.offerName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.offerName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Discount (%)
            </label>
            <input
              type="number"
              {...register("discountPercentage", { valueAsNumber: true })}
              className="w-full p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.discountPercentage && (
              <p className="text-red-400 text-xs mt-1">
                {errors.discountPercentage.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Validity Date
            </label>
            <input
              type="date"
              {...register("offerValidity")}
              className="w-full p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.offerValidity && (
              <p className="text-red-400 text-xs mt-1">
                {errors.offerValidity.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Promo Code
            </label>
            <input
              type="text"
              {...register("promoCode")}
              className="w-full p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.promoCode && (
              <p className="text-red-400 text-xs mt-1">
                {errors.promoCode.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Select products
            </label>
            <div className="flex flex-col gap-[10px] h-[200px] overflow-y-scroll">
              {inventory.map((product, idx) => (
                <div
                  className="flex flex-row justify-start items-center gap-[10px] text-white"
                  key={idx}
                >
                  <Checkbox
                    checked={selectedProducts.includes(product._id)}
                    onCheckedChange={(check) => {
                      if (check) {
                        setSelectedProducts([...selectedProducts, product._id]);
                      } else if (!check) {
                        const updatedList = selectedProducts.filter((id) => {
                          return id !== product._id;
                        });
                        setSelectedProducts(updatedList);
                      }
                    }}
                  />{" "}
                  <span>
                    {product.productName} {"(" + product.material + ")"}
                  </span>
                </div>
              ))}
            </div>
            {selectedProducts.length < 6 && (
              <p className="text-red-400 text-xs mt-1">
                Please select atleast 6 products
              </p>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600/30 hover:bg-purple-700 transition text-purple-500 font-medium py-2 rounded-md"
            >
              {isSubmitting ? "Creating..." : "Create Offer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </form>
    </AlertDialog>
  );
};

export default CreateEvent;
