import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SocketsService } from '../services/sockets.service';
import { UserDataService } from '../services/user/data.service';
import { GroupDataService } from '../services/group/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  groupList;
  channelList;

  formGroupname;
  formChannelname;

  messages = [];
  ioConnection;
  messageContent = "";

  constructor(
    private router: Router,
    private tag: ElementRef,
    private SocketsService: SocketsService,
    private UserDataService: UserDataService,
    private GroupDataService: GroupDataService
  ){}

  ngOnInit(){
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    }
    this.SocketsService.initSocket();
    this.SocketsService.updateGroupList();
    this.SocketsService.onNewGroupList().subscribe((data: any)=>{
      this.groupList = data;
      console.log(this.groupList, data)
    });
  }

  //handles the user clicking the chat button, using sockets to send the mesage to all avalible rooms. Also stores it in a mongoDB.
  chat(){
    if(this.messageContent){
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.SocketsService.chat(this.messageContent);
      this.messageContent = "";
    }else{
      console.log("no message");
    }
  }
  
  //allows a user to join a channel
  joinChannel(){}
  
  //allows a user to leave a channel
  leaveChannel(){}

}
