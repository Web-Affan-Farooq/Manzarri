export default {
    name: "Accounts",
    type: "document",
    title: "Accounts",
    fields: [
        {
            name: "userName",
            type: "string",
            title: "User name"
        },
        {
            name: "userPassword",
            type: "string",
            title: "User password"
        },
        {
            name: "userEmail",
            type: "string",
            title: "User email"
        },
        {
            name: "isBlocked",
            type: "boolean",
            title: "Is blocked",
            initialValue: false,
        },
        {
            name: "isAdmin",
            type: "boolean",
            title: "Admin",
            initialValue: false
        },
        {
            name: "invited",
            type: "boolean",
            title: "Invited on dashboard",
            initialValue: false,
        },
    ]
}