export class Channel {
    mongoID:string;
    ID:number;
    name:string;
    parent:string;
    constructor(mongoID:string, ID:number, name:string, parent:string){
        this.mongoID = mongoID;
        this.ID = ID;
        this.name = name;
        this.parent = parent;
    }
}
