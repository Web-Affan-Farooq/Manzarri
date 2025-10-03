export default {
    name:"Reviews",
    type:"document",
    title:"Reviews",
    fields:[
        {
            name:"personName",
            type:"string",
            title:"Person name",
        },{
            name:"reviewText",
            type:"string",
            title:"Review Content"
        },{
            name:"productId",
            type:"string",
            title:"Reviewed product"
        }
    ]
}