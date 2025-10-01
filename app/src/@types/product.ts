interface Product {
  _id: string;
  productName: string;
  productDescription: string; // See below for PortableTextBlock type
  discountPercentage: number;
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