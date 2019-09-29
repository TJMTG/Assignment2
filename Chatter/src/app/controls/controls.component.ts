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
  // Create user form
  //
  userFormUsername = "";
  userFormPassword = "";
  userFormRole = "";
  userSuccessMessage = "";
  userFailMessages:Array<string>;
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

  createUserClicked(){
    let tempOne = this.tag.nativeElement.querySelector("#userSuccessFeedback");
    tempOne.style.display = "none";
    let tempTwo = this.tag.nativeElement.querySelector("#userFailFeedback");
    tempTwo.style.display = "none";
    this.userSuccessMessage = "";
    this.userFailMessages = [];
    let error = false;
    let feedback = [];
    if(this.userFormUsername == ""){
      error = true;
      feedback.push("Create User: username field is empty.");
    }
    if(this.userFormPassword == ""){
      error = true;
      feedback.push("Create User: password field is empty.");
    }
    if(this.userFormRole == ""){
      error = true;
      feedback.push("Create User: role field is empty.");
    }
    if(error){
      this.userFailMessages = feedback;
      tempTwo.style.display = "block";
    } else {
      let user = {
        "username": this.userFormUsername,
        "password": this.userFormPassword,
        "role": this.userFormRole
      }
      this.UserDataService.create(user).subscribe((data)=>{
        if(data.ok){
          this.userSuccessMessage = user.username;
          tempOne.style.display = "block";
          this.userFormUsername = "";
          this.userFormPassword = "";
          this.userFormRole = "";
        } else {
          console.log(data);
          this.userFailMessages.push(data.message);
          tempTwo.style.display = "block";

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
