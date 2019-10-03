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

  retrieve(mongoID){
    return this.http.post<any>('http://localhost:3000/user/retrieve/one', {"mongoID": mongoID});
  }

    retrieveLogin(user:User){
      return this.http.post<any>('http://localhost:3000/user/retrieve/login', user);
    }

    retrieveAll(){
      return this.http.get<any>('http://localhost:3000/user/retrieve/all');
    }

  update(user:User){
    return this.http.post<any>('http://localhost:3000/user/update', user);
  }

  delete(value){
    return this.http.post<any>('http://localhost:3000/user/delete', {"username":value});
  }


}