export class Group {
    mongoID:string;
    ID:number;
    name:string;
    creator:string;
    channels:Array<string>;
    assistedBy:Array<string>;
    constructor(mongoID:string, ID:number, name:string, creator:string, channels:Array<string>, assistedBy:Array<string>){
        this.mongoID = mongoID;
        this.ID = ID;
        this.name = name;
        this.creator = creator;
        this.channels = channels;
        this.assistedBy = assistedBy;
    }

}
