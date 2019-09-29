export class Group {
    mongoID?:string;
    name:string;
    channels?:Array<string>;
    assistedBy?:Array<string>;
    constructor(mongoID:string, name:string, channels:Array<string>, assistedBy:Array<string>){
        this.mongoID = mongoID;
        this.name = name;
        this.channels = channels;
        this.assistedBy = assistedBy;
    }

}
