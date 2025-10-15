"use client";
import React, { useState } from "react";
import { AdminPanelSidebar } from "@/components/layout";
// import { MessagesSection } from "@/components/pages/Admin";
import { Contact, Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InviteUserAction } from "@/actions/Admin/InviteUserAction";
import { toast } from "sonner";

const InvitePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const getBaseUrl = () => {
    // prefer env var but gracefully fallback to window origin when available
    if (typeof window !== "undefined") {
      return (
        process.env.NEXT_PUBLIC_APP_URL?.replace(/\/+$/, "") ||
        window.location.origin
      );
    }
    return process.env.NEXT_PUBLIC_APP_URL || "";
  };

  const handleInvite = async () => {
    try {
      setLoading(true);
      setCopied(false);
      const { message, success, invite } = await InviteUserAction();

      if (!success) {
        toast.error(message || "Failed to create invite");
        setLoading(false);
        return;
      }

      if (invite && invite._id) {
        const base = getBaseUrl();
        const link = `${base}/api/accept-invite/${invite._id}?key=${invite.inviteKey}`;
        setUrl(link);

        // try copy to clipboard immediately
        try {
          if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            toast.success("Invite link created and copied to clipboard");
          } else {
            // fallback: select input for manual copy
            toast.success("Invite link created — copy it from the box below");
          }
        } catch (err) {
          console.log(err);
          // clipboard may fail on some browsers/contexts
          toast.success("Invite link created — copy it from the box below");
        }
      } else {
        toast.error("Invite created but server did not return an id");
      }
      /*eslint-disable-next-line  @typescript-eslint/no-explicit-any  */
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong while creating invite");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Copied");
    } catch (err) {
      console.log(err);
      // fallback: create a selection for manual copy
      const el = document.getElementById(
        "invite-link-input"
      ) as HTMLInputElement | null;
      if (el) {
        el.select();
        document.execCommand("copy");
        setCopied(true);
        toast.success("Copied");
      } else {
        toast.error(
          "Unable to copy automatically. Please copy the link manually."
        );
      }
    }
  };

  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />

      <div className="w-full p-5 h-[100vh] overflow-y-auto gray-scroller">
        <div className="flex flex-row flex-nowrap justify-between items-center">
          <h1 className="text-2xl font-bold my-[20px]">Invite</h1>

          <div>
            <Button
              className="group hover:text-blue-500 transition-all duration-150 ease-in-out cursor-pointer py-2 px-3 rounded-md flex flex-row flex-nowrap items-center gap-[10px] bg-blue-600"
              onClick={handleInvite}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-[20px] h-[20px] animate-spin" />
              ) : (
                <Contact className={`text-gray-custom w-[20px] h-[20px]`} />
              )}
              <span className="lg:text-md text-sm">Invite</span>
            </Button>
          </div>
        </div>

        <section className="mt-6 max-w-3xl">
          <label className="block text-sm text-gray-300 mb-2">
            Invite link
          </label>

          <div className="flex items-center gap-2">
            <input
              id="invite-link-input"
              readOnly
              value={url}
              placeholder="No invite created yet — click Invite"
              className="flex-1 bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-sm text-white focus:outline-none"
              aria-label="Invite link"
            />

            <Button
              onClick={handleCopy}
              disabled={!url}
              className="py-2 px-3 rounded-md flex items-center gap-2"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="text-sm">{copied ? "Copied" : "Copy"}</span>
            </Button>
          </div>

          <p className="mt-2 text-xs text-gray-400">
            The link will be automatically copied to your clipboard once the
            invite is created. If it isn't — use the Copy button. The link
            expires according to the server policy.
          </p>
        </section>

        {/* optional messages / context area if needed by layout */}
      </div>
    </main>
  );
};

export default InvitePage;
