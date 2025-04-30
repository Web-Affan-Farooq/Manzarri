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
            name: "price",
            type: "number",
            title: "Product price",
            description: "Product price in PKR",
        },
        {
            name: "discountPercentage",
            type: "number",
            title: "Enter discount percentage",
            descritpion: "Eg. 15 for 15% off"
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
            name: "stockQuantity",
            type: "number",
            title: "Stock quantity"
        },
        {
            name: "productMaterial",
            type: "array",
            of: [{ type: "string" }],
            title: "Material"
        },
        {
            name: "productWeight",
            type: "number",
            title: "Weightage (in grams)"
        },
        {
            name: "productDimensions",
            type: "string",
            title: "Product dimensions"
        },
        {
            name: 'category',
            type: 'string',
            options: {
                list: ['Earrings', 'Necklace', "Bracelet","Nose jewellery", "Hair jewellery"],
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
                    {title:"Daily wear", value:"Daily wear"}
                ],
                layout: "grid",
            },
            title: "Select for ocassions",
        },
        {
            name:"tags",
            type:"array",
            of:[{type:"string"}],
            title:"Tags"
        },
        {
            name: "ratings",
            type: "number",
            title: "Enter ratings",
            description: "Enter ratings between 1 to 5",
        },

        {
            name: 'colors',
            title: 'Color Variants',
            type: 'array',
            of: [
              {
                type: 'object',
                title: 'Color Variant',
                fields: [
                  {
                    name: 'color',
                    title: 'Color (hex or name)',
                    type: 'string',
                    description: 'e.g. "#d4af37" or "gold"',
                    validation: (Rule:any) => Rule.required(),
                  },
                  {
                    name: 'images',
                    title: 'Images for this color',
                    type: 'array',
                    of: [{ type: 'image' }],
                    options: {
                      layout: 'grid',
                    },
                    validation: (Rule:any) => Rule.required().min(1),
                  },
                ],
              },
            ],
          }

        // {
        //     name: "ratingsInCount",
        //     type: "number",
        //     title: "Enter ratings count",
        //     description: "How many people had fully rated your products",
        // },

    ]
}