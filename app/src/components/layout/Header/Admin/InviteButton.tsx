import { InviteUserAction } from "@/actions/Admin/InviteActions";
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
import { Contact } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const InviteButton = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="group hover:text-blue-500 w-full transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px] bg-blue-600"
        onClick={async () => {
          setLoading(true);
          const { message, success, invite } = await InviteUserAction();
          if (!success) {
            toast.error(message);
          }
          if (invite) {
            setUrl(
              `${process.env.NEXT_PUBLIC_APP_URL}/accept-invite/${invite._id}`
            );
          }
          setLoading(false);
        }}
      >
        <Contact className={`text-gray-custom w-[20px] h-[20px]`} />
        <span className="lg:text-md text-sm">Invite</span>
      </AlertDialogTrigger>
      <AlertDialogContent className={`${loading ? "hidden" : ""}`}>
        <AlertDialogHeader>
          <AlertDialogTitle>Send this link to the user</AlertDialogTitle>
          <AlertDialogDescription className="hidden">
            We have created an invitation for you , please send this link to the
            user you want to invite on dashboard
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>{url}</div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-blue-600"
            onClick={() => {
              window.navigator.clipboard.writeText(url);
            }}
          >
            Copy
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
