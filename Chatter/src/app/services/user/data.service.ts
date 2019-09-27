import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/user/user';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http:HttpClient){}

  create(user:User){
    return this.http.post<any>('http://localhost:3000/user/create', user);
  }

  retrieve(key, value){
    return this.http.post<any>('http://localhost:3000/user/retrieve', {key:value});
  }

  update(user:User){
    return this.http.post<any>('http://localhost:3000/user/update', user);
  }

  delete(userID){
    return this.http.post<any>('http://localhost:3000/user/delete', {'userID':userID});
  }

}