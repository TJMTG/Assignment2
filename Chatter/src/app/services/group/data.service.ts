import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from 'src/app/classes/group/group';

@Injectable({
  providedIn: 'root'
})
export class GroupDataService {

  constructor(private http:HttpClient){}

  create(group:Group){
    return this.http.post<any>('http://localhost:3000/group/create', group);
  }

  retrieve(key, value){
    return this.http.post<any>('http://localhost:3000/group/retrieve', {key:value});
  }

  retrieveAll(){
    return this.http.post<any>('http://localhost:3000/group/retrieve/all', {});
  }

  update(group:Group){
    return this.http.post<any>('http://localhost:3000/group/update', group);
  }

  delete(mongoID){
    return this.http.post<any>('http://localhost:3000/group/delete', {'userID':mongoID});
  }
}
