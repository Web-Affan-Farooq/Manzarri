export default interface Product {
    _id: string;
    productName: string;
    productDescription: string;
    price: number;
    discountPercentage: number;
    applicableOffers: string[]
    stockKeepingUnit: string;
    productImages: {
        asset: {
            url: string;
            _id: string;
        }
    },
    stockQuantity: number;
    productMaterial: string;
    productWeight: number;
    productDimensions: string;
    productColors: string[]
    category: string;
    ocassions: string[];
    tags: string[];
    ratings: number;
}