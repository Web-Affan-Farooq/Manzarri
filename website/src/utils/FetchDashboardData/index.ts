import sanityClient from "@/lib/sanity";
import { Account } from "@/@types/accounts";
import FormSubmission from "@/@types/FormSubmissions";
import { Product } from "@/@types/product";
import { Order } from "@/@types/order";

/* ____ Fetch accounts ... */
const getAccounts = async () => {
    const q = `
    *[_type == "Accounts"] {
  _id,
  userEmail,
  userName,
  isBlocked,
  isAdmin,
}
    `;
    const response: Account[] = await sanityClient.fetch(q);
    return response;
}

/* ____ Fetch form submissions ... */
const getFormSubmissions = async () => {
        const q = `*[_type == "FormSubmissions"]{
    _id,
    customerEmail,
    customerMessage,
    customerName,
    userPhonenumber,
    _updatedAt,
  } | order(_updatedAt desc)`

  const response: FormSubmission[] = await sanityClient.fetch(q);
  return response;
}

/* ____ Fetch inventory ... */
const getInventory = async () => {
    const q = `
    *[_type == "Product"] {
  _id,
  productName,
  productDescription[]{
    children[]{
      _key,
      _type,
      text
    }
  },
  discountPercentage,
  applicableOffers,
  stockKeepingUnit,
  jewelleryType,
  ocassions,
  tags,
  ratings,
  price,
  stockQuantity,
  weightInGrams,
    availableSizes,
  dimensions,
  material,
  images[] {
    asset-> {
      _id,
      url
    }
  }
}`;
    const response:Product[] = await sanityClient.fetch(q);
    return response;
}

/* ____ Fetch orders placed in current month ... */
const getCurrentMonthOrders =async () => {
const date = new Date();
const startOfMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01T00:00:00Z`;

const query = `*[_type == "Orders" && _updatedAt >= dateTime("${startOfMonth}")]{
  _id,
  _updatedAt,
  userId,
  amountPayable,
  status,
  weightageInGrams,
  packages
}`;

    const response: Order[] = await sanityClient.fetch(query);
    return response;
}

/* ____ Fetch orders placed previously ... */
const getPreviousOrders = async () => {
  const date = new Date();
  const query = `*[_type == "Orders" && _updatedAt >= dateTime("${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01T00:00:00Z")]{
  _id,
  _updatedAt,
  userId,
  amountPayable,
  status,
  weightageInGrams,
  packages
}`;

  //       const query = `*[_type == "Orders" && _updatedAt >"${date.getFullYear()}-${date.getMonth()}-${date.getDate()}"]{
  //   _id,
  //   _updatedAt,
  //   userId,
  //   amountPayable,
  //   status,
  //   weightageInGrams,
  //   packages
  // }`;

    const response: Order[] = await sanityClient.fetch(query);

    return response;
}

export {
    getAccounts,
    getFormSubmissions,
    getInventory,
    getCurrentMonthOrders,
    getPreviousOrders,
}