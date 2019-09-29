import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/user/user';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private http:HttpClient){}


  create(user:User){
    return this.http.post<any>('http://localhost:3000/user/create', user);
  }

  retrieve(key, value){
    return this.http.post<any>('http://localhost:3000/user/retrieve/one', {key:value});
  }

    retrieveAll(){
      return this.http.post<any>('http://localhost:3000/user/retrieve/all', {});
    }

    retrieveLogin(user:User){
      return this.http.post<any>('http://localhost:3000/user/retrieve/login', user);
    }

  update(user:User){
    return this.http.post<any>('http://localhost:3000/user/update', user);
  }

  delete(userID){
    return this.http.post<any>('http://localhost:3000/user/delete', {'userID':userID});
  }


}