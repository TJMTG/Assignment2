
export class User {
    mongoID:string;
    ID:number;
    username:string;
    picture:string;
    role:string;
    groupsIn:Array<string>;
    groupChannelsIn:Array<string>;
    assistantOf:Array<string>
    constructor(mongoID:string, ID:number, username:string, picture:string, role:string, groupsIn:Array<string>, groupChannelsIn, assistantOf:Array<string>){
        this.mongoID = mongoID;
        this.ID = ID;
        this.username = username;
        this.picture = picture;
        this.role = role;
        this.groupsIn = groupsIn;
        this.groupChannelsIn = groupChannelsIn;
        this.assistantOf = assistantOf;
    }
}
