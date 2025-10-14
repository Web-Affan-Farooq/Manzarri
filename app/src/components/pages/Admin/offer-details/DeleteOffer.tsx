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
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const DeleteOffer = ({ id }: { id: string }) => {
  const { deleteOffer } = useOffers();
  const router = useRouter();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer flex justify-center items-center p-3 rounded-md bg-gray-900">
        <Trash2 className="size-4 stroke-red-600" />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-transparent backdrop-blur-2xl text-white ">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-white">
            This action cannot be undone. This will permanently delete offer
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer transition-all duration-200 ease-in-out text-sm bg-indigo-400/20 border-none px-[20px] rounded-md py-[5px] text-indigo-600 hover:text-white cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            type="button"
            onClick={() => {
              deleteOffer(id);
              router.push("/Admin/offers");
            }}
            className="cursor-pointer transition-all duration-200 ease-in-out text-sm bg-indigo-400/20 border-none px-[20px] rounded-md py-[5px] text-red-600 hover:text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
