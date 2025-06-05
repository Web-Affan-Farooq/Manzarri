export interface Order {
userId:string;
weightageInGrams:number;
amountPayable:number;
status:string;
packages: Package[]
}

export interface Package {
productId:string;
productName:string;
productSKU:string;
size:string;
_key:string;
}