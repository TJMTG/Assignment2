
export class User {
    mongoID?:string;
    username?:string;
    password?:string;
    image?:string;
    role?:string;
    groupsIn?:Array<string>;
    groupChannelsIn?:Array<string>;
    assistantOf?:Array<string>
    constructor(
            mongoID:string, 
            username:string,
            password:string,
            image:string, 
            role:string, 
            groupsIn:Array<string>, 
            groupChannelsIn:Array<string>, 
            assistantOf:Array<string>
        ){
        this.mongoID = mongoID;
        this.username = username;
        this.password = password;
        this.image = image;
        this.role = role;
        this.groupsIn = groupsIn;
        this.groupChannelsIn = groupChannelsIn;
        this.assistantOf = assistantOf;
    }
}
