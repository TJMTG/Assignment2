import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SocketsService } from '../services/sockets.service';
import { UserDataService } from '../services/user/data.service';
import { GroupDataService } from '../services/group/data.service';

const HttpOptions = {
  headers: new HttpHeaders({"Content-Type":"application/json"})
};

const backendURL = "http://localhost:3000";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})

export class ControlsComponent implements OnInit {

  userRole = JSON.parse(sessionStorage.getItem("role"));

  userList:any;
  groupList:any;

  //
  // Create group form
  //
  groupFormName = "";
  groupSuccessMessage = "";
  groupFailMessages:Array<string>;

  constructor(
    private router: Router,  
    private HttpClient: HttpClient, 
    private tag: ElementRef,
    private SocketsService: SocketsService,
    private UserDataService: UserDataService,
    private GroupDataService: GroupDataService
  ){}

  ngOnInit(){
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    } else {
      if(JSON.parse(sessionStorage.getItem("role")) == "regularUser"){
        this.router.navigateByUrl("/profile");
      }
    }
    this.SocketsService.initSocket();
    this.SocketsService.updateUserList();
    this.SocketsService.onNewUserlist().subscribe((data)=>{
      this.userList = data;
    });
  }

  deleteUserClicked(username){
    if (confirm("Are you sure you want to delete the user '" + username + "'?")){
      this.UserDataService.delete(username).subscribe((data)=>{
        if(data.ok == true){
          this.SocketsService.updateUserList();
        }
      });
    }
  }

  deleteGroupClicked(name){
    if (confirm("Are you sure you want to delete the group '" + name + "'?")){
      this.GroupDataService.delete(name).subscribe((data)=>{
        if(data.ok == true){// change to true
          this.SocketsService.updateGroupList();
        }
      });
    }
  }

  createGroupClicked(){
    let tempOne = this.tag.nativeElement.querySelector("#groupSuccessFeedback");
    tempOne.style.display = "none";
    let tempTwo = this.tag.nativeElement.querySelector("#groupFailFeedback");
    tempTwo.style.display = "none";
    this.groupSuccessMessage = "";
    this.groupFailMessages = [];
    let error = false;
    let feedback = [];
    if(this.groupFormName == ""){
      error = true;
      feedback.push("Create User: username field is empty.");
    }
    if(error){
      this.groupFailMessages = feedback;
      tempTwo.style.display = "block";
    } else {
      let group = {
        "name": this.groupFormName
      }
      this.GroupDataService.create(group).subscribe((data)=>{
        if(data.ok){
          this.groupSuccessMessage = group.name;
          tempOne.style.display = "block";
          this.groupFormName = "";
        } else {
          console.log(data);
          this.groupFailMessages.push(data.message);
          tempTwo.style.display = "block";
        }
      });
    }
  }


}
