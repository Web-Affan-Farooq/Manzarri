"use server";
import sanityClient from "@/lib/sanity";
import GenerateString from "@/utils/GenerateString";

export const InviteUserAction = async (): Promise<{
  message: string;
  success: boolean;
  invite?: {
    _id: string;
    inviteKey: string;
  };
}> => {
  try {
    const data = await sanityClient.create({
      _type: "Invitations",
      inviteKey: GenerateString(6),
    });
    return {
      message: "Invitation activated",
      success: true,
      invite: {
        _id:data._id,
        inviteKey:data.inviteKey
      }
    };
  } catch (err) {
    console.log(err);
    return {
      message: "An error occured",
      success: false,
    };
  }
};
