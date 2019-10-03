import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from 'src/app/classes/user/user';
import { UserDataService } from 'src/app/services/user/data.service';
import { LoginService } from 'src/app/services/login/login.service';

/*
const HttpOptions = {
  headers: new HttpHeaders({"Content-Type":"application/json"})
};

const backendURL = "http://localhost:3000";
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //
  // Feedback
  //
  successMessage = "";
  failMessages:Array<string> = [""];

  //
  // Form: Login
  //
  formUsername = "";
  formPassword = "";


  user: User = {
    username: this.formUsername,
    password: this.formPassword,
  }

  constructor(
    private router: Router, 
    //private HttpClient: HttpClient, 
    private loginService: LoginService, 
    private tag: ElementRef,
    private UserDataService: UserDataService
  ){}

  ngOnInit(){}

  //searches the database for a matching pair of username and password, loging the user in if a match is found
  public loginClicked(){
    console.log("Login Clicked.");
    sessionStorage.clear();
    let successFeedback = this.tag.nativeElement.querySelector("#successFeedback");
    successFeedback.style.display = "none";
    let failFeedback = this.tag.nativeElement.querySelector("#failFeedback");
    failFeedback.style.display = "none";
    let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
    this.successMessage = "";
    this.failMessages = [];
    let error = false;
    let feedback = [];
    if(this.formUsername == ""){
      error = true;
      feedback.push("Login: 'username' field is empty.");
    }
    if(this.formPassword == ""){
      error = true;
      feedback.push("Login: 'password' field is empty.");
    }
    if(error){
      this.failMessages = feedback;
      failFeedback.style.display = "block";
      feedbackBar.style.display = "block";
    } else {
      this.user.username = this.formUsername;
      this.user.password = this.formPassword;
      successFeedback.style.display = "none";
      failFeedback.style.display = "none";
      feedbackBar.style.display = "none";
      this.UserDataService.retrieveLogin(this.user).subscribe((data)=>{
        if(data.ok){
          console.log("Logged In.");
          sessionStorage.setItem("mongoID", JSON.stringify(data.results[0]._id));
          sessionStorage.setItem("username", JSON.stringify(data.results[0].username));
          sessionStorage.setItem("role", JSON.stringify(data.results[0].role));
          this.loginService.isLoggedIn = true;
          console.log(data.results);
          this.router.navigateByUrl("/profile");
        } else {
          this.failMessages.push(data.message);
          failFeedback.style.display = "block";
          feedbackBar.style.display = "block";
        }
      });
    }
  }

  //logs the user out of when the logout button is clicked
  logoutClicked(){
    console.log("Logout Clicked.");
    sessionStorage.clear();
    this.loginService.isLoggedIn = false;
    console.log("Logged out.");
  }

}
