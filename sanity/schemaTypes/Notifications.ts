export default {
    name: "Notifications",
    type: "document",
    title: "Notifications",
    fields: [
        {
            name: "notificationTitle",
            type: "string",
            title: "Notification Title",
        },
        {
            name: "notificationText",
            type: "string",
            title: "Notification Text",
        },
        {
            name: 'notificationType',
            type: 'string',
            options: {
                list: ["Promotion","Order","Warning","Review","Product", "Notify"],
                layout: 'radio',
            },
        },
        {
            name:"isSeen",
            type:"boolean",
            title:"Is seened",
            initialValue:false,
        },
        {
            name:"userId",
            type:"reference",
            title:"User id",
            to:[{type:"Accounts"}]
        }
    ]
}