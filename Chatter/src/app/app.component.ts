import { Component, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Chatter';

  constructor(private loginService: LoginService, private tag: ElementRef){}

  ngOnInit(){
  }

  logoutClicked(){
    console.log("Logout Clicked.");
    sessionStorage.clear();
    this.loginService.isLoggedIn = false;
    console.log("Logged out.");
  }

}
