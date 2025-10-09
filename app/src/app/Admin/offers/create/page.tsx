"use client";

// ____ Hooks ...
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useInventory from "@/stores/admin/inventory";
import { useOffers } from "@/stores/admin/offer";
import { useRouter } from "next/navigation";

// ____ Libraries ...
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// ____ types and schemas ...
import OfferSchema from "@/validations/OfferSchema";

// ____ Components  ...
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AdminPanelSidebar } from "@/components/layout";
import Image from "next/image";

type OfferFormData = z.infer<typeof OfferSchema>;

const CreateEvent = () => {
  const router = useRouter();
  const { inventory } = useInventory();
  const { addOffer } = useOffers();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<OfferFormData>({
    resolver: zodResolver(OfferSchema),
    mode: "onChange",
    defaultValues: {
      products: [],
    },
  });

  // keep react-hook-form in sync with selectedProducts
  useEffect(() => {
    setValue("products", selectedProducts);
  }, [selectedProducts, setValue]);

  const bannerFiles = watch("bannerImage");

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const file = bannerFiles?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      return () => URL.revokeObjectURL(url); // cleanup when file changes
    }
    setImagePreview(null);
  }, [bannerFiles]);

  const onSubmit = async (data: OfferFormData) => {
    if (selectedProducts.length < 6) {
      toast.error("Please select at least 6 products");
      return;
    }

    const payload = {
      ...data,
      products: selectedProducts,
      bannerImage: data.bannerImage?.[0],
    };

    console.log("Payload:", payload);
    addOffer(payload);
    reset();
    setSelectedProducts([]);
    router.push("/Admin/offers");
  };

  return (
    <>
      <main className="flex min-h-screen bg-black text-white">
        <AdminPanelSidebar />
        <div className="w-full p-5 h-[100vh] overflow-y-auto gray-scroller">
          <h1 className="text-xl font-bold mt-[19px] mb-[30px]">Events</h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            {/* Discount */}
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

            {/* Validity */}
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

            {/* Product Selector */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Select products
              </label>
              <div className="flex flex-col gap-2 h-[200px] overflow-y-auto">
                {inventory.map((product, idx) => (
                  <div
                    className="flex items-center gap-2 text-white"
                    key={product._id || idx}
                  >
                    <Checkbox
                      checked={selectedProducts.includes(product._id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedProducts((prev) => [...prev, product._id]);
                        } else {
                          setSelectedProducts((prev) =>
                            prev.filter((id) => id !== product._id)
                          );
                        }
                      }}
                    />
                    <span>
                      {product.productName} ({product.material})
                    </span>
                  </div>
                ))}
              </div>
              {selectedProducts.length < 6 && (
                <p className="text-red-400 text-xs mt-1">
                  Please select at least 6 products
                </p>
              )}
            </div>

            {/* message title */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Message title
              </label>
              <input
                type="text"
                {...register("messageTitle")}
                className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.messageTitle && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.messageTitle.message}
                </p>
              )}
            </div>

            {/* message description */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Message
              </label>
              <input
                type="text"
                {...register("messageDescription")}
                className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.messageDescription && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.messageDescription.message}
                </p>
              )}
            </div>

            {/* message description */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Banner image
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("bannerImage")}
                className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
              />
              {typeof errors.bannerImage?.message === "string" && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.bannerImage.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Preview
              </label>
              <div className="w-[300px] h-[300px] rounded-md">
                {imagePreview && (
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600/30 hover:bg-purple-700 transition text-purple-500 font-medium py-2 rounded-md"
              >
                {isSubmitting ? "Creating..." : "Create Offer"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateEvent;
