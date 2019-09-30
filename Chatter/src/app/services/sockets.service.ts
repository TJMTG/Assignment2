import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { Message } from '../classes/message/message';

const serverUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class SocketsService {

  private socket;

  constructor(){}

  initSocket(): void{
    this.socket = socketIo(serverUrl);
  }

  //
  // User list
  //
  updateUserList() {
    this.socket.emit('updateUserList', 'list please');
  }

  onNewUserlist(){
      let observable = new Observable(observer=>{
        this.socket.on('newUserList', (data) => observer.next(data));
    });
    return observable;
  }

  //
  // Group List
  //
  updateGroupList() {
    this.socket.emit('updateGroupList', 'list please');
  }

  onNewGrouplist(){
      let observable = new Observable(observer=>{
        this.socket.on('newGroupList', (data) => observer.next(data));
    });
    return observable;
  }




  onMessage(){
    let observable = new Observable(observer=>{
      this.socket.on('message', (data) => observer.next(data));
    });
    return observable;
  }

  chat(message:Message){
    this.socket.emit("message",message);
  }

  prodcount(){
    this.socket.emit("prodcount","count please");
  }

  onProdcount(){
    let observable = new Observable(observer=>{
      this.socket.on('prodcount', (data) => observer.next(data));
    });
    return observable;
  }
}
