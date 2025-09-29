export default {
    name: "Product",
    type: "document",
    title: "Product catalog",
    fields: [
        {
            name: "productName",
            type: "string",
            title: "Enter product name ",
            description: "Name of the product",
            initialValue:"undefined Product name "
        },
        {
            name: 'productDescription',
            type: "array",
            of: [{ type: "block" }],
            title: "Enter product description",
            validation: (Rule: any) => Rule.required().min(1),
        },
        {
            name: "discountPercentage",
            type: "number",
            title: "Enter discount percentage",
            description: "Eg. 15 for 15% off",
            initialValue:0
        },
        {
            name: "applicableOffers",
            type: "array",
            of: [{ type: "string" }],
            title: "Applicable offers",
            initialValue:[]
        },
        {
            name: "stockKeepingUnit",
            type: "string",
            title: "Enter SKU.id",
            initialValue:"#"
        },
        {
            name: 'jewelleryType',
            type: 'string',
            options: {
                list: ['Earrings', 'Necklace', "Bracelet", "Nose jewellery", "Hair jewellery"],
                layout: 'radio',
            },
            initialValue:"Necklace"
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
            initialValue:[]
        },
        {
            name: "tags",
            type: "array",
            of: [{ type: "string" }],
            title: "Tags",
            initialValue:[]
        },
        {
            name: "price",
            type: "number",
            title: "Price in USDT",
            initialValue:0,
        },
        {
            name: "stockQuantity",
            type: "number",
            title: "Stock quantity",
            initialValue:10,
        },
        {
            name: "weightInGrams",
            type: "number",
            title: "Weight in grams",
            initialValue:2
        },
        {
            name: "dimensions",
            type: "string",
            title: "dimensions",
            initialValue:"Not defined"
        },
        {
            name: "material",
            type: "string",
            title: "material",
            initialValue:"Not defined"
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
            initialValue:[]
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
        {
            name:"ratings",
            type:"array",
            of:[{type:"number"}],
            title:"Ratings",
            initialValue:[]
        }
    ]
}