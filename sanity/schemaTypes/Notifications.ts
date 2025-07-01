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
                list: ["Success","Failure","Warning"],
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
            type:"string",
            title:"User id",
        }
    ]
}

