interface Offer {
  _id: string;
  _updatedAt: string;
  discountPercentage: number;
  offerName: string;
  offerValidity: string;
  products: string[];
  promoCode: string;
  bannerImage:string
}
export type {
    Offer
}