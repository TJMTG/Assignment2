import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SocketsService } from '../services/sockets.service';
import { GroupDataService } from '../services/group/data.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './groupCreate.component.html',
  styleUrls: ['./groupCreate.component.scss']
})
export class GroupCreateComponent implements OnInit {

  userRole = JSON.parse(sessionStorage.getItem("role"));

  //
  // Create group form
  //
  groupFormName = "";
  successMessage = "";
  failMessages:Array<string>;

  constructor(
    private router: Router, 
    private tag: ElementRef,
    private SocketsService: SocketsService,
    private GroupDataService: GroupDataService,
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
  }

  createGroupClicked(){
    let tempOne = this.tag.nativeElement.querySelector("#successFeedback");
    tempOne.style.display = "none";
    let tempTwo = this.tag.nativeElement.querySelector("#failFeedback");
    tempTwo.style.display = "none";
    let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
    feedbackBar.style.display = "none";
    this.successMessage = "";
    this.failMessages = [];
    let error = false;
    let feedback = [];
    if(this.groupFormName == ""){
      error = true;
      feedback.push("Create Group: name field is empty.");
    }
    if(error){
      this.failMessages = feedback;
      tempTwo.style.display = "block";
      feedbackBar.style.display = "block";
    } else {
      let group = {
        "name": this.groupFormName,
        "channels": [],
        "assistedBy": [],
        "users": []
      }
      this.GroupDataService.create(group).subscribe((data)=>{
        if(data.ok){
          this.successMessage = group.name;
          tempOne.style.display = "block";
          feedbackBar.style.display = "block";
          this.groupFormName = "";
        } else {
          console.log(data);
          this.failMessages.push(data.message);
          tempTwo.style.display = "block";
          feedbackBar.style.display = "block";
        }
      });
    }
  }

}
