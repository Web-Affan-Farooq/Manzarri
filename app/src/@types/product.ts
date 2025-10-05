import { Review } from "./review";

interface Product {
  _id: string;
  productName: string;
  productDescription: string; 
  applicableOffers: string []| null;
  stockKeepingUnit: string;
  jewelleryType: string;
  ocassions: string[];
  tags: string[];
  ratings: number;
  price: number;
  stockQuantity: number;
  weightInGrams: number;
  dimensions: string;
  material: string;
  availableSizes:string[];
  images: string[];
  addedToCartBy:string[]
addedToWishlistBy:string[]
  reviews:Review[]
}

export type {
  Product,
}

/*
Package {
productId:string;
productName:string;
productSKU:string;
size:string;
}

order {
userId:string;
weightageInGrams:number;
amountPayable:number;
packages: Packages[]
}
*/