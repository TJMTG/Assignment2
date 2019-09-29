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

  public loginClicked(){

    sessionStorage.clear();

    this.user.username = this.loginFormUsername;
    this.user.password = this.loginFormPassword;

    let tempOne = this.tag.nativeElement.querySelector("#loggedOutMessage");
    tempOne.style.display = "none";

    let tempTwo = this.tag.nativeElement.querySelector("#loggedInFailMessage");
    tempTwo.style.display = "none";

    this.HttpClient.post(backendURL + "/user/login", this.user, HttpOptions).subscribe(
      (data:any)=>{
        if(data.ok){
          sessionStorage.setItem("username", JSON.stringify(this.user.username));
          sessionStorage.setItem("role", JSON.stringify(data.role));
          this.loginService.isLoggedIn = true;
          this.router.navigateByUrl("/profile");
        } else {
          tempOne.style.display = "block";
        }
      }
    )
  }

  logoutClicked(){
    sessionStorage.clear();
    this.loginService.isLoggedIn = false;
    console.log("Logged out.");
  }

}
