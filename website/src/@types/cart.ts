import { Product } from "./product";
export interface CartProduct {
  id:string;
  size:string;
  quantity: number;
  item: Product;
}