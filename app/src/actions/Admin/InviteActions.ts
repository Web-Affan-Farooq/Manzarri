"use server";
import { Invite } from "@/@types/invite";
import sanityClient from "@/lib/sanity";
import GenerateString from "@/utils/GenerateString";

export const InviteUserAction = async (): Promise<{
  message: string;
  success: boolean;
  invite?: Invite;
}> => {
  try {
    const now = new Date();
    now.setHours(now.getHours() + 1)
    
    const data = await sanityClient.create({
      _type: "Invitations",
      inviteKey: GenerateString(6),
      expiration:now.toISOString() // invitation valid for one hour 
    });
    return {
      message: "Invitation activated",
      success: true,
      invite: {
        _id:data._id,
        _createdAt:data._createdAt,
        inviteKey:data.inviteKey,
        hasJoined:false,
        expiration:data.expiration,
        joinedAt:null,
        logs:[]
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


export const DeleteInviteAction = async (id:string):Promise<{
  message:string;
  success:boolean
}> => {
  try {
    await sanityClient.delete(id);
    return {
      message:"Invite deleted successfully",
      success:true
    }
  } catch (err) {
    console.log(err);
        return {
      message:"An error occured",
      success:false
    }
  }
}
export const FetchInvites = async ():Promise<Invite[]> => {
  const query = `*[_type == "Invitations"] | order(_createdAt desc) {
    _id,
    _createdAt,
    inviteKey,
    expiration,
    hasJoined,
    joinedAt,
    logs
  }`;

  const invites = await sanityClient.fetch(query);
  return invites;
};
