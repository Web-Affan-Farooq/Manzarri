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
            name: "lastLogin",
            type: "datetime",
            title: "Last login"
        },
        {
            name: "orders",
            type: "array",
            title: "Orders",
            initialValue: [],
            of: [
                {
                    type: "reference",
                    to: [{ type: "Orders" }]
                }
            ]
        }

    ]
}