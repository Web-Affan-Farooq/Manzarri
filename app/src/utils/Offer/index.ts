import { Offer } from "@/@types/offer";
import sanityClient from "@/lib/sanity";
import Logger from "../Logger";


const logger = new Logger("utils//Offer/index.ts");
/**
 * CLass containing server actions regardingg offer creation ...
 */
class CreateOffer {
  public discountPercentage: number;
  public offerName: string;
  public offerValidity: string;
  public products: string[];
  public promoCode: string;
  public bannerImage?: File;
  public offerHeadline:string;
  public offerDescription :string

  constructor(
    offerName: string,
    offerValidity: string,
    discountPercentage: number,
    products: string[],
    promoCode: string,
      offerHeadline:string,
   offerDescription :string,
    bannerImage?: File
  ) {
    this.discountPercentage = discountPercentage;
    this.offerName = offerName;
    this.offerValidity = offerValidity;
    this.products = products;
    this.promoCode = promoCode;
    this.offerHeadline = offerHeadline;
    this.offerDescription = offerDescription
    this.bannerImage = bannerImage;
  }

  // _______ For sending notifications to all users when offer is created ...
  SendNotificationsToAccounts = async () => {
    logger.log(45, "Sending notifications ...", "");
    // _____ Construct the query ...
    const q = `*[_type == "Accounts"]{_id}`;
    // _____ Fetch all accouts ids from sanity ...
    const response: { _id: string }[] = await sanityClient.fetch(q);

    logger.log(51, "Fetched account ids ...", response);
    await Promise.all(
      response.map(async (param) => {
        logger.log(54, "Creating notification for account id : ", param._id);
        // _____ Create notification using each account id ...
        const newNotification = {
          _type: "Notifications",
          isSeen: false,
          notificationText: this.offerDescription,
          notificationTitle: this.offerHeadline,
          notificationType: "Offer",
          userId: param._id, // ____ Attached account id so that user can recieve notification ...
        };
        await sanityClient.create(newNotification);
        console.log(68, "Created notification for account id : ", param._id);
      })
    );
  };

  // ______ For uploading offer banner to sanity assets ...
  UploadBannerImage = async (): Promise<{
    success: boolean;
    message: string;
    _id?: string;
    url?: string;
  }> => {
    logger.log(83, "Uploading banner image : ", "");
    try {
      // ____ Return error early if banner image is not found ...
      if (!this.bannerImage) {
        const returnedMessage = {
          success: false,
          message: "Banner image not found",
        };
        logger.log(
          91,
          "Banner image is not given when creating CreateOffer class instance : ",
          returnedMessage
        );
        return returnedMessage;
      }
      const buffer = Buffer.from(await this.bannerImage.arrayBuffer());
      logger.log(95, "Created file buffer : ", buffer);
      // ____ Upload to sanity ...
      const uploaded = await sanityClient.assets.upload("image", buffer, {
        filename: this.bannerImage.name,
      });
      // ____ Return success response ...
      const returnedResponse = {
        success: true,
        message: "Image uploaded successfully",
        _id: uploaded._id,
        url: uploaded.url,
      };
      logger.log(108, "Image uploaded successfully : ", returnedResponse);
      return returnedResponse;
    } catch (err) {
      // ____ Return error response ...
      console.log(err);
      return {
        success: false,
        message: "Image upload failed",
      };
    }
  };

  // ______ For creating offers ...
  CreateNewOffer = async (): Promise<{
    message: string;
    success: boolean;
    offer?: Offer;
  }> => {
    try {
      if (!this.bannerImage) {
        const returnedMessage = {
          message: "Banner image not found ! ...",
          success: false,
        };
        logger.log(132, "Banner image not found : ", returnedMessage);
      }

      // _____ First upload the banner image to sanity ...
      const { message, success, _id, url } = await this.UploadBannerImage();

      if (!success || !_id || !url) {
        return {
          success: false,
          message: "Banner image upload failed : " + message,
        };
      }

      const newOffer = {
        _type: "Offers",
        offerName: this.offerName,
        offerValidity: this.offerValidity,
        products: this.products,
        promoCode: this.promoCode,
        offerDescription : this.offerDescription,
        offerHeadline : this.offerHeadline,
        discountPercentage: this.discountPercentage,
        bannerImage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: _id,
          },
        },
      };
      logger.log(160, "Creating offer : ...", "");

      const response = await sanityClient.create(newOffer);
      logger.log(163, "Offer inserted in datasets successfully : ", response);
      logger.log(164, "Sending notifications ... ", "");

      await this.SendNotificationsToAccounts();

      const returnedMessage = {
        success: true,
        message: "Offer created successfully",
        offer: {
          ...response,
          assetId: _id,
          bannerImage: url,
          isActive: true,
          engagementCount: 0,
        },
      };
      logger.log(177, "Offer created successfully : ", returnedMessage);

      return returnedMessage;
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: "An error occured",
      };
    }
  };
}

export { CreateOffer};
