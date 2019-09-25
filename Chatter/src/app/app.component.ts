import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Chatter';

  // for *ngIf logged in or logged out functionality
  isLoggedIn: boolean;
  ngOnInit(){
   this.isLoggedIn = this.keyHasValue('Username');
  }
  keyHasValue(key: string): boolean {
    if (localStorage.getItem(key) == ""){
      return false
    } else {
      return true
    }
  }
  //

}
