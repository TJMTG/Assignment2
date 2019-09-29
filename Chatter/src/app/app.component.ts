import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Chatter';

  constructor(private loginService: LoginService){}

  ngOnInit(){
  }

  logoutClicked(){
    sessionStorage.clear();
    this.loginService.isLoggedIn = false;
  }

}
