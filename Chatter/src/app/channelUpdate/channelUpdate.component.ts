import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Group } from '../classes/group/group';
import { GroupDataService } from '../services/group/data.service';
import { User } from '../classes/user/user';
import { SocketsService } from '../services/sockets.service';
import { UserDataService } from '../services/user/data.service';

@Component({
  selector: 'app-channel-update',
  templateUrl: './channelUpdate.component.html',
  styleUrls: ['./channelUpdate.component.scss']
})
export class ChannelUpdateComponent implements OnInit {
  
  urlParameterMongoID;
  urlParameterChannelname;

  //
  // Form: Channel Update
  //
  formName;
  successMessage = "";
  failMessages = [];

  //
  // User list
  //
  userGroupList;
  userChannelList;
  formAddUser = null;
  formDeleteUser = null;

  userRole = JSON.parse(sessionStorage.getItem("role"));

  constructor(
    private GroupDataService: GroupDataService,
    private route: ActivatedRoute, 
    private router: Router,
    private tag: ElementRef,
    private UserDataService: UserDataService,
    private SocketsService: SocketsService
  ){}

  ngOnInit() {
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    } else {
      if(JSON.parse(sessionStorage.getItem("role")) == "regularUser"){
        this.router.navigateByUrl("/profile");
      }
    }
    this.route.paramMap.subscribe((params)=>{
      this.urlParameterMongoID = params.get("mongoID");
      this.urlParameterChannelname = params.get("channelname");
      this.formName = this.urlParameterChannelname;
    });
    this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
      if(data.ok){
        console.log("The group data: ", data);
        this.userGroupList = data.results[0].users;
        console.log("The group list: ", this.userGroupList);
        let i;
        for(i = 0; i < data.results[0].channels.length; i++){
          if(data.results[0].channels[i].name == this.urlParameterChannelname){
            this.userChannelList = data.results[0].channels[i].userss
            console.log("The channel list: ", this.userChannelList);
            break
          }
        }
      } else {
        console.log("Failed to retrieve data.");
      }
    });
    this.SocketsService.initSocket();
  }

  addUserClicked(){
    if(this.formAddUser != null && this.formAddUser != undefined){
      this.GroupDataService.updateChannelUsers(this.urlParameterMongoID, this.urlParameterChannelname, this.formAddUser).subscribe((data)=>{
        if(data.ok){
          this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
            if(data.ok){
              //console.log("The group data: ", data);
              this.userGroupList = data.results[0].users;
              //console.log("The group list: ", this.userGroupList);
              let i;
              for(i = 0; i < data.results[0].channels.length; i++){
                if(data.results[0].channels[i].name == this.urlParameterChannelname){
                  this.userChannelList = data.results[0].channels[i].userss
                  //console.log("The channel list: ", this.userChannelList);
                  break
                }
              }
            } else {
              console.log("Failed to retrieve data.");
            }
          });
        }
      });
    }
  }

  deleteUserClicked(user){
    this.GroupDataService.deleteChannelUser(this.urlParameterMongoID, user).subscribe((data)=>{
      if(data.ok){
        this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
          if(data.ok){
            //console.log("The group data: ", data);
            this.userGroupList = data.results[0].users;
            //console.log("The group list: ", this.userGroupList);
            let i;
            for(i = 0; i < data.results[0].channels.length; i++){
              if(data.results[0].channels[i].name == this.urlParameterChannelname){
                this.userChannelList = data.results[0].channels[i].userss
                //console.log("The channel list: ", this.userChannelList);
                break
              }
            }
          } else {
            console.log("Failed to retrieve data.");
          }
        });
      }
    });
  }

}
