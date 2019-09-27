
//
// Don't forget to update chat.component.html & chat.component.ts with the new variable names
// search for the old ones with: "messagetext" & "messagetime"
//

export class Message {
    content:string;
    author:string;
    authorPicture:string;
    date:Date;
    constructor(content:string, author:string, authorPicture:string, date:Date){
        this.content = content;
        this.author = author;
        this.authorPicture = authorPicture;
        this.date = date;
    }
}
