import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean;

  constructor(private http: HttpClient){
    if(sessionStorage.getItem("username") == null){
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }
}
