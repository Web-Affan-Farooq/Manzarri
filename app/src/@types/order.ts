interface Order {
  _id?: string;
  _updatedAt?: string;
  userId: string;
  weightageInGrams: number;
  amountPayable: number;
  status: string;
  packages: Package[]
}

interface Package {
  productId: string;
  quantity: number;
  productName: string;
  productSKU: string;
  size: string;
  _key: string;
}

interface OrderedProducts {
    _key: string;
    size: string;
    quantity: number;
    productSKU: string;
    productId: string;
    productName: string;
    image: string;
    price: number;
}

export type {
  Order,
  Package,
  OrderedProducts,
}