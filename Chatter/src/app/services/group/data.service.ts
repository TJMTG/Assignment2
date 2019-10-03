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

  retrieve(mongoID){
    return this.http.post<any>('http://localhost:3000/group/retrieve/one', {"mongoID": mongoID});
  }

  retrieveChannels(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/retrieve/channels', {"mongoID": mongoID, "name": name});
  }

  retrieveAll(){
    return this.http.get<any>('http://localhost:3000/group/retrieve/all');
  }

  updateName(group){
    return this.http.post<any>('http://localhost:3000/group/update/name', group);
  }

  updateUsers(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/update/users', {"mongoID":mongoID, "name":name});
  }

  updateChannels(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/update/channels', {"mongoID":mongoID, "name":name});
  }

  updateChannelUsers(mongoID, channelname, username){
    return this.http.post<any>('http://localhost:3000/group/update/channel/user', {"mongoID":mongoID, "channelname":channelname, "username":username});
  }

  updateAssistants(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/update/assistants', {"mongoID":mongoID, "name":name});
  }

  deleteGroup(name){
    return this.http.post<any>('http://localhost:3000/group/delete/group', {"name":name});
  }

  deleteUser(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/delete/user', {"mongoID":mongoID, "name":name});
  }

  deleteChannel(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/delete/channel', {"mongoID":mongoID, "name":name});
  }

  deleteAssistant(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/delete/assistant', {"mongoID":mongoID, "name":name});
  }

  deleteChannelUser(mongoID, name){
    return this.http.post<any>('http://localhost:3000/group/delete/channel/user', {"mongoID":mongoID, "name":name});
  }
}
