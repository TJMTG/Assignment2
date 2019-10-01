import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../classes/user/user';
import { UserDataService } from '../services/user/data.service';



@Component({
  selector: 'app-user-update',
  templateUrl: './userUpdate.component.html',
  styleUrls: ['./userUpdate.component.scss']
})
export class UserUpdateComponent implements OnInit {
  usernameParameter;
  userRole = JSON.parse(sessionStorage.getItem("role"));

  //
  // Create user form
  //
  userFormUsername = "";
  userFormPassword = "";
  userFormRole = "";
  userSuccessMessage = "";
  userFailMessages:Array<string>;

  //
  // 
  //
  oldUsername = "";

  constructor(
    private UserDataService: UserDataService,
    private route: ActivatedRoute, 
    private router: Router,
    private tag: ElementRef
  ){}

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.usernameParameter = params.get('username');
    });
    this.UserDataService.retrieve(this.usernameParameter).subscribe((data)=>{
      if(data.ok){
        this.oldUsername = data.results[0].username;
        this.userFormUsername = data.results[0].username;
        this.userFormPassword = data.results[0].password;
        this.userFormRole = data.results[0].role;
      } else {
        console.log("Failed to retrieve data.");
      }
    });
  }
 
  updateUserClicked(){
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
      let user: User = new User(null, this.userFormUsername, this.userFormPassword, null, this.userFormRole, null, null, null);
      this.UserDataService.update(this.oldUsername, user).subscribe((data)=>{
        if(data.ok){
          //this.userSuccessMessage = user.username;
          //tempOne.style.display = "block";
          //this.usernameParameter = user.username;
          this.router.navigateByUrl("/controls");
        } else {
          this.userFailMessages.push(data.message);
          tempTwo.style.display = "block";
        }
      });
    }
  }

}
