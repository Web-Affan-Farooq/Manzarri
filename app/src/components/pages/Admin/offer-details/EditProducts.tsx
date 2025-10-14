"use client";

// _____ Hooks ...
import useInventory from "@/stores/admin/inventory";
import { useState } from "react";

// _____ Components ...
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
import { Pen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useOffers } from "@/stores/admin/offer";

export const EditOfferProducts = ({
  offerId,
  products,
}: {
  offerId: string;
  products: string[];
}) => {
  const { inventory } = useInventory();
  const { editOffer } = useOffers();
  const [selectedProducts, setSelectedProducts] = useState<string[]>(products);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer flex justify-center items-center p-3 rounded-md bg-gray-900">
        <Pen className="size-4 stroke-blue-600" />
      </AlertDialogTrigger>
      <AlertDialogContent className="text-white bg-transparent backdrop-blur-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Select products</AlertDialogTitle>
          <AlertDialogDescription>
            Select products on which discount of offer is applied
          </AlertDialogDescription>
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
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer transition-all duration-200 ease-in-out text-sm bg-indigo-400/20 border-none px-[20px] rounded-md py-[5px] text-red-600 hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            type="button"
            onClick={() => {
              editOffer(offerId, {
                products: selectedProducts,
              });
            }}
            className="cursor-pointer transition-all duration-200 ease-in-out text-sm bg-indigo-400/20 border-none px-[20px] rounded-md py-[5px] text-indigo-600 hover:text-white cursor-pointer"
          >
            Update
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
