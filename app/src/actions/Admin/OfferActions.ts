"use server";
import { Offer } from "@/@types/offer";
import sanityClient from "@/lib/sanity";
// import { accountsQuery } from "@/queries/accounts";
import OfferSchema from "@/validations/OfferSchema";
import { z } from "zod";

// _______ For sending notifications to all users when offer is created ...
const SendNotificationsToAccounts = async (
  notificationTitle: string,
  notificationText: string
) => {
  console.log("-------12 ----  Sending notifications  :  ...");
  // _____ Construct the query ...
  const q = `*[_type == "Accounts"]{_id}`;
  // _____ Fetch all accouts ids from sanity ...
  const response: { _id: string }[] = await sanityClient.fetch(q);

  console.log("-------22 ----  Fetched account ids  :  ...");
  await Promise.all(
    response.map(async (param) => {
      console.log(
        "-------26 ----  Creating notification for account id : ",
        param._id
      );
      // _____ Create notification using each account id ...
      const newNotification = {
        _type: "Notifications",
        isSeen: false,
        notificationText: notificationText,
        notificationTitle: notificationTitle,
        notificationType: "Offer",
        userId: param._id, // ____ Attached account id so that user can recieve notification ...
      };
      await sanityClient.create(newNotification);
      console.log(
        "-------36 ----  Created notification for account id : ",
        param._id
      );
    })
  );
};

// ______ For uploading offer banner to sanity assets ...
const UploadBannerImage = async (
  file: File
): Promise<{
  success: boolean;
  message: string;
  _id?: string;
  url?:string
}> => {
  try {
    console.log("-------44 ----  Uploading file ...");
    // ____ Create buffer ...
    const buffer = Buffer.from(await file.arrayBuffer());

    // ____ Upload to sanity ...
    const uploaded = await sanityClient.assets.upload("image", buffer, {
      filename: file.name,
    });
    console.log("-------52---- file uploaded successfully ...");
    // ____ Return success response ...
    return {
      success: true,
      message: "Image uploaded successfully",
      _id: uploaded._id,
      url:uploaded.url,
    };
  } catch (err) {
    console.log("-------60---- file upload failed ...");
    // ____ Return error response ...
    console.log(err);
    return {
      success: false,
      message: "Image upload failed",
    };
  }
};

const CreateOfferAction = async (
  body: z.infer<typeof OfferSchema>
): Promise<{
  message: string;
  success: boolean;
  offer?: Offer
}> => {
  try {
    // _____ First upload the banner image to sanity ...
    const { message, success, _id , url } = await UploadBannerImage(
      body.bannerImage
    );
  if (!success || !_id || !url) {
      return {
        success: false,
        message: "Banner image upload failed : " + message,
      };
    }

    const newOffer = {
      _type: "Offers",
      offerName: body.offerName,
      offerValidity: body.offerValidity,
      products: body.products,
      promoCode: body.promoCode,
      discountPercentage: body.discountPercentage,
      bannerImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: _id,
        },
      },
    };
    console.log("-------105---  Created  offer :  ...", newOffer);
    console.log("-------106----  creating  :  ...");
    const response = await sanityClient.create(newOffer);

    await SendNotificationsToAccounts(
      body.messageTitle,
      body.messageDescription
    );

    return {
      success: true,
      message: "Offer created successfully",
      offer: {
        ...response,
        bannerImage:url,
      }
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "An error occured",
    };
  }
};

// _____ Action for deleting offer ...
const DeleteOfferAction = async (
  id: string
): Promise<{
  message: string;
  success: boolean;
}> => {
  "use server";
  try {
    await sanityClient.delete(id);
    return {
      message: "Offer deleted successfully",
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "An error occured",
      success: false,
    };
  }
};

export { CreateOfferAction, DeleteOfferAction };
