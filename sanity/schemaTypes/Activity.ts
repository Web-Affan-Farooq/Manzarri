export default {
    name: "AccountActivity",
    type: "document",
    title: "Account activity",
    fields: [
        {
            name: "userId",
            type: "string",
            title: "User Id",
            initialValue: ""
        },
        {
            name: "orders",
            type: "array",
            title: "Orders",
            initialValue:[],
            of: [
                {
                    type: "reference",
                    to: [{ type: "Orders" }]
                }
            ]
        }

    ]
}