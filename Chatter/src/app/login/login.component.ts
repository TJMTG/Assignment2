import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormUsername = '';
  loginFormPassword = '';

  constructor() { }

  ngOnInit() {
  }

  public loginClicked(){
    console.log("+-------------------------------------------\\");
    console.log("| The login form's login button was clicked.");
    console.log("|     value inputed for username->", this.loginFormUsername);
    console.log("|     value inputed for password->", this.loginFormPassword);
    console.log("+-------------------------------------------/");
    console.log();
  }

}
