export default interface Product {
    _id: string;
    productName: string;
    productDescription: string;
    price: number;
    discountPercentage: number;
    applicableOffers: string[]
    stockKeepingUnit: string;
    stockQuantity: number;
    productMaterial: string;
    productWeight: number;
    productDimensions: string;
    category: string;
    ocassions: string[];
    tags: string[];
    ratings: number;
    colors: [
        {
            color: string;
            images: [
                {
                    asset: {
                        url: string;
                    }
                }
            ]
        }
    ]
}