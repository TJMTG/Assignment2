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
  groupSuccessMessage = "";
  groupFailMessages:Array<string>;

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
