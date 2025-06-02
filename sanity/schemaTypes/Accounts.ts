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
            name: "isAdmin",
            type: "boolean",
            title: "Admin",
            initialValue: false // ✅ Correct key for default values in Sanity
        }
    ]
}