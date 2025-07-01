interface Product {
  _id: string;
  productName: string;
  productDescription: PortableTextBlock[]; // See below for PortableTextBlock type
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
  images: ProductImage[];
}

interface ProductImage {
  asset: {
    _id: string;
    url: string;
  };
}

// Basic Portable Text structure (customizable based on your needs)
interface PortableTextBlock {
  children: {
    _key: string;
    _type: string; // usually "span"
    text: string;
  }[];
}

export type {
  Product,
  ProductImage,
  PortableTextBlock,
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