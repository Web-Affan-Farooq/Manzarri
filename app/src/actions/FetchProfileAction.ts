// _____ Note : Just created for now , not used in app ...
"use server";
import sanityClient from "@/lib/sanity";
import GetTokenPayload from "@/utils/GetTokenPayload";
import { ProfileData } from "@/@types/profiledata";
import { Notification } from "@/@types/notifications";
import { Order, Package } from "@/@types/order";
import { Product } from "@/@types/product";

const FetchUserOrders = async (order_ids:string[]) => {
 const q = `*[_type == "Orders" && _id in ${JSON.stringify(order_ids)}]{
  _id,
  _updated,
  amountPayable,
    packages,
    status,
    "userId":userId._ref,
    weightageInGrams,
}`;

  const orders = await sanityClient.fetch(q);

  const packagesIds: string[] = [];
  orders.forEach((order: Order) => {
    order.packages.forEach((pkg: Package) => {
      packagesIds.push(pkg.productId);
    });
  });

  const qu = `*[_type == "Product" && _id in ${JSON.stringify(packagesIds)}]{
_id,
availableSizes,
dimensions,
  discountPercentage,
images,
jewelleryType,
material,
ocassions,
price,
ratings,
productDescription,
productName,
stockKeepingUnit,
stockQuantity,
tags,
addedToCartBy,
addedToWishlistBy,
weightInGrams,
    "images": images[].asset->url
  }`;

  const products:Product[] = await sanityClient.fetch(qu);

  const data = orders.map((order: Order) => {
    const updatedPackages = order.packages.map((pack: Package) => {
      const requiredProduct = products.filter(
        (product) => product._id === pack.productId
      )!;

      return {
        _key: pack._key,
        product: requiredProduct,
        quantity: pack.quantity,
        size: pack.size,
      };
    });

    return {
      amountPayable: order.amountPayable,
      _id: order._id,
      status: order.status,
      weightageInGrams: order.weightageInGrams,
      userId: order.userId,
      _updatedAt: order._updatedAt,
      packages: updatedPackages,
    };
  });

  return data
} 
const FetchNotificationAction = async (id: string) : Promise<Notification[] | null> => {
  const notificationQuery = `*[_type == "Notifications" &&  userId=="${id}"]{
        _id,
  isSeen,
    "date":_updatedAt,
notificationText,
notificationTitle,
notificationType,
userId
}`;

  try {
    const notifications = await sanityClient.fetch(
    notificationQuery,
    {},
    { next: { revalidate: 60 } }
  );
  return notifications;
  } catch (err) {
    console.log(err)
    return null
  }
};

const FetchProfileAction = async (): Promise<{
  message: string;
  success: boolean;
  info?: ProfileData;
  redirect?: "/login";
}> => {
  const payload = await GetTokenPayload();
  console.log("Get payload : ",payload);
  if (!payload) {
    return {
      message: "Unauthorized",
      success: false,
      redirect: "/login",
    };
  }
  try {
    const q = `*[_type == "Accounts" && _id == "${payload.accountId}"] {
  _id,
_updatedAt,
isAdmin,
isBlocked,
lastLogin,
userEmail,
userName,
orders,
}`
    const [response]=
      await sanityClient.fetch(q);
console.log("Fetched data : ",response);


    return {
      success: true,
      message: "",
      info: response,
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
    FetchNotificationAction,
    FetchProfileAction,
    FetchUserOrders,
}