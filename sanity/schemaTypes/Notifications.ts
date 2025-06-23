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
            name: "notificationType",
            title: "Notification type",
            type: "string",
            options: {
                list: ['Success', 'Failure', "Warning"],
                layout: 'radio',
            },
        },
        {
            name: "isSeen",
            type: "boolean",
            title: "Notification seened",
            initialValue: false,
        },
        {
            name: "notificationText",
            type: "string",
            title: "Notification text",
        },
        {
            name: "userId",
            type: "string",
            title: "User id"
        },
    ]
}