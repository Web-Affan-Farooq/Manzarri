export default {
    name:"Offers",
    type:"document",
    title:"Offers",
    fields:[
        {
            name:"offerName",
            type:"string",
            title:"Offer name",
            initialValue:"",
        },{
            name:"offerValidity",
            type:"date",
            title:"Offer valid till ",
        },{
            name:"products",
            type:"array",
            of:[{type:"string"}],
            initialValue:[]
        },
        {
            name:"promoCode",
            type:"string",
            title:"Promo code"
        },
        {
            name:"discountPercentage",
            type:"number",
            title:"Discount percentage"
        }
    ]
}