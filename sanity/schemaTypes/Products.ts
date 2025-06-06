export default {
    name: "Product",
    type: "document",
    title: "Product catalog",
    fields: [
        {
            name: "productName",
            type: "string",
            title: "Enter product name ",
            description: "Name of the product"
        },
        {
            name: 'productDescription',
            type: "array",
            of: [{ type: "block" }],
            title: "Enter product description",
        },
        {
            name: "discountPercentage",
            type: "number",
            title: "Enter discount percentage",
            description: "Eg. 15 for 15% off"
        },
        {
            name: "applicableOffers",
            type: "array",
            of: [{ type: "string" }],
            title: "Applicable offers"
        },
        {
            name: "stockKeepingUnit",
            type: "string",
            title: "Enter SKU.id"
        },
        {
            name: 'jewelleryType',
            type: 'string',
            options: {
                list: ['Earrings', 'Necklace', "Bracelet", "Nose jewellery", "Hair jewellery"],
                layout: 'radio',
            },
        },
        {
            name: "ocassions",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Weddings", value: "Weddings" },
                    { title: "Party and gatherings", value: "Party and gatherings" },
                    { title: "Daily wear", value: "Daily wear" }
                ],
                layout: "grid",
            },
            title: "Select for ocassions",
        },
        {
            name: "tags",
            type: "array",
            of: [{ type: "string" }],
            title: "Tags"
        },
        {
            name: "ratings",
            type: "number",
            title: "Enter ratings",
            description: "Enter ratings between 1 to 5",
        },
        {
            name: "price",
            type: "number",
            title: "Price in USDT",
        },
        {
            name: "stockQuantity",
            type: "number",
            title: "Stock quantity",
        },
        {
            name: "weightInGrams",
            type: "number",
            title: "Weight in grams",
        },
        {
            name: "dimensions",
            type: "string",
            title: "dimensions"
        },
        {
            name: "material",
            type: "string",
            title: "material",
        },

        {
            name: "availableSizes",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Small", value: "sm" },
                    { title: "Medium", value: "md" },
                    { title: "Large", value: "lg" }
                ],
                layout: "grid",
            },
            title: "Available sizes",
        },
        {
            name: 'images',
            title: 'Product images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid',
            },
            validation: (Rule: any) => Rule.required().min(1),
        },
    ]
}