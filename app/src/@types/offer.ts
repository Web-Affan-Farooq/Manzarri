interface Offer {
  _id: string;
  _updatedAt: string;
  assetId:string;
  discountPercentage: number;
  offerName: string;
  offerValidity: string;
  products: string[];
  isActive:boolean;
  promoCode: string;
  bannerImage:string;
  engagementCount:number
  offerDescription:string;
}
export type {
    Offer
}