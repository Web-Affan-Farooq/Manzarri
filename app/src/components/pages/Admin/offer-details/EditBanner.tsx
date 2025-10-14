"use client";

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
import { useOffers } from "@/stores/admin/offer";
import { Pen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const EditOfferBanner = ({
  offerId,
  assetId,
  image,
}: {
  offerId: string;
  assetId: string;
  image: string;
}) => {
  const { updateBanner } = useOffers();

  const [imagePreview, setImagePreview] = useState<string>(image);

  const [file, setfile] = useState<File | null>(null);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer flex justify-center items-center p-3 rounded-md bg-gray-900">
        <Pen className="size-4 stroke-blue-600" />
      </AlertDialogTrigger>
      <AlertDialogContent className="text-white bg-transparent backdrop-blur-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Update banner</AlertDialogTitle>
          <AlertDialogDescription>
            Update the banner image of your offer
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* message description */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Banner image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
                setfile(e.target.files[0]);
              }
            }}
            className="w-full md:w-[40vw] p-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* preview ,,, */}

        <div>
          <label className="block text-sm text-gray-400 mb-1">Preview</label>
          <div className="w-[300px] h-[300px] rounded-md overflow-hidden">
            <Image
              src={imagePreview}
              alt="Preview"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer transition-all duration-200 ease-in-out text-sm bg-indigo-400/20 border-none px-[20px] rounded-md py-[5px] text-red-600 hover:text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            type="button"
            onClick={() => {
              if (file) {
                updateBanner(offerId, assetId, file);
              }
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
