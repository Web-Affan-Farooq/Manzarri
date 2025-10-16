interface Invite {
    _id:string;
    _createdAt:string
    inviteKey:string;
    expiration:string;
    hasJoined:boolean;
    joinedAt:string | null;
    logs:string[]
}

export type {
    Invite
}