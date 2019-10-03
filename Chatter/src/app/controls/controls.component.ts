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

  loggedInUsername = JSON.parse(sessionStorage.getItem("username"));
  loggedInRole = JSON.parse(sessionStorage.getItem("role"));

  userList:any = [];
  groupList:any = [];

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
      let role = JSON.parse(sessionStorage.getItem("role"));
      if(role == "regularUser" || role == "groupAssistant"){
        this.router.navigateByUrl("/profile");
      }
    }
    this.SocketsService.initSocket();
    this.SocketsService.updateUserList();
    this.SocketsService.onNewUserList().subscribe((data)=>{
      //console.log("Controls, user: ", data);
      this.userList = data;
    });
    this.SocketsService.updateGroupList();
    this.SocketsService.onNewGroupList().subscribe((data)=>{
      //console.log("Controls, group: ", data);
      this.groupList = data;
    });
  }

  deleteUserClicked(value){
    if (confirm("Are you sure you want to delete the user '" + value + "'?")){
      this.UserDataService.delete(value).subscribe((data)=>{
        if(data.ok == true){
          console.log("User deleted.");
          this.SocketsService.updateUserList();
        } else {
          console.log("Failed to delete user.");
        }
      });
    }
  }

  deleteGroupClicked(name){
    if (confirm("Are you sure you want to delete the group '" + name + "'?")){
      this.GroupDataService.deleteGroup(name).subscribe((data)=>{
        if(data.ok == true){
          console.log("Group deleted.");
          this.SocketsService.updateGroupList();
        } else {
          console.log("Failed to delete group.");
        }
      });
    }
  }

}
