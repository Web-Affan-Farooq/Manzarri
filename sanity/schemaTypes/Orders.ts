export default {
    name:"Orders",
    type:"document",
    title:"Orders",
    fields: [
        {
            name:"userId",
            type:"string",
            title:"user Id"
        },
        {
            name:"weightageInGrams",
            type:"number",
            title:"weight in grams"
        },
        {
            name:"amountPayable",
            type:"number",
            title:"Amount payable"
        },
        {
            name:"packages",
            type:"array",
            of:[
                {
                    type:"object",
                    fields:[
                        {
                            name:"productId",
                            type:"string",
                            title:"Product Id",
                        },
                                                {
                            name:"productName",
                            type:"string",
                            title:"Product",
                        },
                        {
                            name:"productSKU",
                            type:"string",
                            title:"Stock Keeping unit (SKU)",
                        },
                        {
                            name:"size",
                            type:"string",
                            title:"Size"
                        },
                    ]
                }
            ],
        }
    ]
}