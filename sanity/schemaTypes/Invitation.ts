export default {
    name:"Invitations",
    type:"document",
    title:"Invitations",
    fields: [
        {
            name:"inviteKey",
            type:"string",
            title:"Invitee key"
        },{
            name:"expiration",
            type:"datetime",
            title:"Expiration time"
        },{
            name:"hasJoined",
            type:"boolean",
            title:"Has joined"
        },{
            name:"joinedAt",
            type:"datetime",
            title:"Joined timestamp"
        },{
            name:"logs",
            type:"array",
            of:[{type:"string"}],
            title:"Logs"
        }
    ]
}

