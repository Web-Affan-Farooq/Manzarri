"use server";
// _____ Utilities ....
import Logger from "@/utils/Logger";
import sanityClient from "@/lib/sanity";
// _____ Modules ....
import { CreateOffer } from "@/utils/Offer";
// _____ libraries ...
import z from "zod";
// _____ Types and schemas ....
import { Offer } from "@/@types/offer";
import OfferSchema from "@/validations/OfferSchema";
import { UpdatedOfferData } from "@/validations/EditOfferSchema";

const logger = new Logger("/actions/Admin/OfferAction.ts");

const CreateOfferAction = async (
  data: z.infer<typeof OfferSchema>
): Promise<{
  message: string;
  success: boolean;
  offer?: Offer;
}> => {
  logger.log(8, "Running CreateOfferAction() ...", "");

  const { CreateNewOffer } = new CreateOffer(
    data.offerName,
    data.offerValidity,
    data.discountPercentage,
    data.products,
    data.promoCode,
    data.offerHeadline,
    data.offerDescription,
    data.bannerImage
  );

  const response = await CreateNewOffer();
  return {
    ...response,
  };
};

const EditOfferBannerAction = async (
  id: string,
  assetId: string,
  image: File
): Promise<{
  message: string;
  success: boolean;
  url?: string;
}> => {
  logger.log(
    208,
    "Running EditOfferBanner() ...",
    "----------------------------------- "
  );
  try {
    // 1. remove reference from the offer document
    await sanityClient
      .patch(id)
      .unset(["bannerImage"]) // removes the reference field
      .commit();
    // _____ First delete the previous image ...
    await sanityClient.delete(assetId);
    logger.log(
      211,
      "delete offer banner ...",
      "----------------------------------- "
    );

    // _____ upload new banner ...
    const buf = Buffer.from(await image.arrayBuffer());
    logger.log(214, "Created buffer of new image ...", buf);
    const uploadedFile = await sanityClient.assets.upload("image", buf, {
      filename: image.name,
    });
    logger.log(218, "Uploaded image successfully ...", uploadedFile);

    // _____ Update document ...
    await sanityClient
      .patch(id)
      .set({
        bannerImage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: uploadedFile._id,
          },
        },
      })
      .commit();

    const returnedMessage = {
      message: "Image updated successfully",
      success: true,
      url: uploadedFile.url,
    };

    logger.log(226, "Operation completed successfully ...", returnedMessage);
    return returnedMessage;
  } catch (err) {
    console.log(err);
    const returnedMessage = {
      message: "An error occured",
      success: false,
    };
    return returnedMessage;
  }
};

const EditOfferAction = async (
  _id: string,
  data: UpdatedOfferData
): Promise<{
  message: string;
  success: boolean;
  offer?: Omit<Offer, "bannerImage">;
}> => {
  logger.log(236, "Running EditofferAction ...", "----------------------");
  try {
    logger.log(241, "Collected new offer data ", data);
    logger.log(264, "Creating update request ", "..............");

    // ______ Create update request ...
    const updatedOffer = await sanityClient.patch(_id).set(data).commit();
    logger.log(271, "Updated in datasets ", updatedOffer);

    // ______ Return success response ...
    const messageResponse = {
      message: "Offer updated successfully",
      success: true,
      offer: {
        assetId: updatedOffer.assetId,
        offerName: updatedOffer.offerName,
        offerValidity: updatedOffer.offerValidity,
        discountPercentage: updatedOffer.discountPercentage,
        _id: updatedOffer._id,
        _updatedAt: updatedOffer._updatedAt,
        products: updatedOffer.products,
        promoCode: updatedOffer.promoCode,
        isActive: updatedOffer.isActive,
        engagementCount: updatedOffer.engagementCount,
        offerDescription: updatedOffer.offerDescription,
      },
    };

    logger.log(290, "Returning response", messageResponse);
    return messageResponse;
  } catch (err) {
    console.log(err);
    return {
      message: "An error occured",
      success: false,
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
  try {
    logger.log(68, "Recieved id ...", id);
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
export {
  CreateOfferAction,
  EditOfferAction,
  DeleteOfferAction,
  EditOfferBannerAction,
};
