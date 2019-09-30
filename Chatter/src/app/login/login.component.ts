import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from 'src/app/classes/user/user';
import { UserDataService } from 'src/app/services/user/data.service';
import { LoginService } from 'src/app/services/login/login.service';

const HttpOptions = {
  headers: new HttpHeaders({"Content-Type":"application/json"})
};

const backendURL = "http://localhost:3000";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormUsername = "";
  loginFormPassword = "";

  user: User = {
    username: this.loginFormUsername,
    password: this.loginFormPassword,
  }

  constructor(private router: Router, private HttpClient: HttpClient, private loginService: LoginService, private tag: ElementRef){}

  ngOnInit(){}

  public async loginClicked(){
    console.log("Login Clicked.");
    sessionStorage.clear();

    this.user.username = this.loginFormUsername;
    this.user.password = this.loginFormPassword;

    let loginFail = this.tag.nativeElement.querySelector("#logginFailMessage");
    loginFail.style.display = "none";

    let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");

    this.HttpClient.post(backendURL + "/user/login", this.user, HttpOptions).subscribe(
      (data:any)=>{
        if(data.ok){
          sessionStorage.setItem("username", JSON.stringify(this.user.username));
          sessionStorage.setItem("role", JSON.stringify(data.role));
          this.loginService.isLoggedIn = true;
          console.log("Logged In.");
          this.router.navigateByUrl("/profile");
        } else {
          loginFail.style.display = "block";
          feedbackBar.style.display = "block";
        }
      }
    )
  }

  logoutClicked(){
    console.log("Logout Clicked.");
    sessionStorage.clear();
    this.loginService.isLoggedIn = false;
    console.log("Logged out.");
  }

}
