import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Group } from '../classes/group/group';
import { GroupDataService } from '../services/group/data.service';
import { User } from '../classes/user/user';
import { SocketsService } from '../services/sockets.service';
import { UserDataService } from '../services/user/data.service';


@Component({
  selector: 'app-group-update',
  templateUrl: './groupUpdate.component.html',
  styleUrls: ['./groupUpdate.component.scss']
})
export class GroupUpdateComponent implements OnInit {

  userRole = JSON.parse(sessionStorage.getItem("role"));

  globalUsers;
  userList = [];
  assistantList = [];
  channelList = [];

  urlParameterMongoID;
  successMessage = "";
  failMessages = [];

  //
  // Update group form
  //
  oldGroupname;
  formName;

  //
  // Add user form
  //
  formAddUser;

  //
  // Add assistant form
  //
  formAddAssistant = null;

  //
  // Add channel
  //
  formAddChannel = null;

  //
  // Group target
  //
  group = {
    "mongoID":"",
    "name":"",
    "channels":[],
    "users":[],
    "assistedBy":[]
  }

  constructor(
    private GroupDataService: GroupDataService,
    private route: ActivatedRoute, 
    private router: Router,
    private tag: ElementRef,
    private UserDataService: UserDataService,
    private SocketsService: SocketsService
  ){}

  ngOnInit(){
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    } else {
      if(JSON.parse(sessionStorage.getItem("role")) == "regularUser"){
        this.router.navigateByUrl("/profile");
      }
    }
    this.route.paramMap.subscribe((params)=>{
      this.urlParameterMongoID = params.get('mongoID');
    });
    this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
      if(data.ok){
        console.log("The group data:! ", data);
        this.userList = data.results[0].users;
        this.assistantList = data.results[0].assistedBy;
        this.channelList = data.results[0].channels;
        console.log("the channel list", this.channelList)
        this.formName = data.results[0].name;
        this.group.mongoID = data.results[0]._id;
        this.group.name = data.results[0].name;
        this.group.channels = data.results[0].channels;
        this.group.assistedBy = data.results[0].assistedBy;
        this.group.users = data.results[0].users;
      } else {
        console.log("Failed to retrieve data.");
      }
    });
    this.SocketsService.initSocket();
    this.SocketsService.updateUserList();
    this.SocketsService.onNewUserList().subscribe((data)=>{
      //console.log("Controls, user: ", data);
      this.globalUsers = data;
    });
  }

  updateGroupClicked(){
    let successFeedback = this.tag.nativeElement.querySelector("#successFeedback");
    successFeedback.style.display = "none";
    let failFeedback = this.tag.nativeElement.querySelector("#failFeedback");
    failFeedback.style.display = "none";
    let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
    feedbackBar.style.display = "none";
    this.successMessage = "";
    this.failMessages = [];
    let error = false;
    let feedback = [];
    if(this.formName == ""){
      error = true;
      feedback.push("Update Group: name field is empty.");
    }
    if(error){
      this.failMessages = feedback;
      failFeedback.style.display = "block";
      feedbackBar.style.display = "block";
    } else {
      this.group.name = this.formName;
      this.GroupDataService.updateName(this.group).subscribe((data)=>{
        if(data.ok){
          this.successMessage = data.message;
          successFeedback.style.display = "block";
          feedbackBar.style.display = "block";
        } else {
          this.failMessages.push(data.message);
          failFeedback.style.display = "block";
          feedbackBar.style.display = "block";
        }
      });
    }
  }

  addUserClicked(){
    if(this.formAddUser != null && this.formAddUser != undefined){
      this.GroupDataService.updateUsers(this.urlParameterMongoID, this.formAddUser).subscribe((data)=>{
        if(data.ok){
          this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
            if(data.ok){
              this.userList = data.results[0].users;
              this.formAddUser = null;
            } else {
              console.log("Failed to retrieve data.");
            }
          });
        }
      });
    }
  }

  deleteUserClicked(username){
    this.GroupDataService.deleteUser(this.urlParameterMongoID, username).subscribe((data)=>{
      if(data.ok){
        this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
          if(data.ok){
            this.userList = data.results[0].users;
          } else {
            console.log("Failed to retrieve data.");
          }
        });
      }
    });
  }

  addAssistantClicked(){
    if(this.formAddAssistant != null && this.formAddAssistant != undefined){
      this.GroupDataService.updateAssistants(this.urlParameterMongoID, this.formAddAssistant).subscribe((data)=>{
        if(data.ok){
          this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
            if(data.ok){
              this.assistantList = data.results[0].assistedBy;
              this.formAddAssistant = null;
            } else {
              console.log("Failed to retrieve data.");
            }
          });
        }
      });
    }
  }

  deleteAssistantClicked(username){
    this.GroupDataService.deleteAssistant(this.urlParameterMongoID, username).subscribe((data)=>{
      if(data.ok){
        this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
          if(data.ok){
            this.assistantList = data.results[0].assistedBy;
          } else {
            console.log("Failed to retrieve data.");
          }
        });
      }
    });
  }

  deleteChannelClicked(name){
    this.GroupDataService.deleteChannel(this.urlParameterMongoID, name).subscribe((data)=>{
      if(data.ok){
        this.GroupDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
          if(data.ok){
            this.channelList = data.results[0].channels;
          } else {
            console.log("Failed to retrieve data.");
          }
        });
      } else {
        console.log("false");
      }
    });
  }

}
