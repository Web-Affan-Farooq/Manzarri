import sanityClient from "@/lib/sanity";
import { Account } from "@/@types/accounts";
import FormSubmission from "@/@types/FormSubmissions";
import { Product } from "@/@types/product";

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
  const response: Account[] = await sanityClient.fetch(q, {}, {
    next: {
      revalidate: 30,
    }
  });
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

  const response: FormSubmission[] = await sanityClient.fetch(q, {}, {
    next: {
      revalidate: 30,
    }
  });
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
  const response: Product[] = await sanityClient.fetch(q, {}, {
    next: {
      revalidate: 30,
    }
  });
  return response;
}

const getOrders = async () => {
  const q = `*[_type == "Orders"]{ 
   _id,
  _updatedAt,
  userId,
  amountPayable,
  status,
  weightageInGrams,
  packages
  }`;
  const response = await sanityClient.fetch(q, {}, {
    next: {
      revalidate: 30,
    }
  });
  return response;
}

export {
  getAccounts,
  getFormSubmissions,
  getInventory,
  getOrders,
}