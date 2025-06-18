export interface Order {
userId:string;
weightageInGrams:number;
amountPayable:number;
status:string;
packages: Package[]
}

export interface Package {
  productId: string;
  quantity: number;
  productName: string;
  productSKU: string;
  size: string;
  _key: string;
}


export interface OrderDetails extends Order{
    _id:string;
    _updatedAt:string;
}
