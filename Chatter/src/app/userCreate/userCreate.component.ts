import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SocketsService } from '../services/sockets.service';
import { UserDataService } from '../services/user/data.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './userCreate.component.html',
  styleUrls: ['./userCreate.component.scss']
})
export class UserCreateComponent implements OnInit {

  userRole = JSON.parse(sessionStorage.getItem("role"));

  //
  // Create user form
  //
  userFormUsername = "";
  userFormPassword = "";
  userFormRole = "";
  userSuccessMessage = "";
  userFailMessages:Array<string>;

  constructor(
    private router: Router, 
    private tag: ElementRef,
    private SocketsService: SocketsService,
    private UserDataService: UserDataService,
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

}
