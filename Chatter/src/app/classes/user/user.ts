
export class User {
    mongoID?:string;
    username:string;
    password:string;
    picture?:string;
    role?:string;
    groupsIn?:Array<string>;
    groupChannelsIn?:Array<string>;
    assistantOf?:Array<string>
    constructor(
            mongoID:string, 
            username:string,
            password:string,
            picture:string, 
            role:string, 
            groupsIn:Array<string>, 
            groupChannelsIn:Array<string>, 
            assistantOf:Array<string>
        ){
        this.mongoID = mongoID;
        this.username = username;
        this.password = password;
        this.picture = picture;
        this.role = role;
        this.groupsIn = groupsIn;
        this.groupChannelsIn = groupChannelsIn;
        this.assistantOf = assistantOf;
    }
}
