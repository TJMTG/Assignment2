import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SocketsService } from '../services/sockets.service';
import { UserDataService } from '../services/user/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInMongoID = JSON.parse(sessionStorage.getItem("mongoID"))
  loggedInUsername = JSON.parse(sessionStorage.getItem("username"));
  loggedInRole = JSON.parse(sessionStorage.getItem("role"));

  groupList:any = [];

  loggedInUser = {
    "image": ""
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private tag: ElementRef,
    private SocketsService: SocketsService,
    private UserDataService: UserDataService
  ){}

  ngOnInit(){
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    }
    this.SocketsService.initSocket();
    this.SocketsService.updateGroupList();
    this.SocketsService.onNewGroupList().subscribe((data: any[])=>{
      //console.log("Controls, group: ", data);
      let i;
      for(i = 0; i < data.length; i++){
        let x;
        for(x = 0; x < data[i].users.length; x++){
          if(data[i].users[x] == this.loggedInUsername){
            this.groupList.push(data[i])
            break
          }
        }
      }
    });
    this.UserDataService.retrieve(this.loggedInMongoID).subscribe((data)=>{
      if(data.ok){
        //console.log(data);
        this.loggedInUser.image = data.results[0].image;
        //console.log(this.loggedInUser.image);
      } else {
        console.log("Failed to retrieve data.");
      }
    });
  }

  toggleCollapse(groupName){
    let tempIconTag = this.tag.nativeElement.querySelector("#icon_" + groupName);
    let tempListTag = this.tag.nativeElement.querySelector("#list_" + groupName);
    let i;
    let result = false;
    for(i=0; i < tempListTag.classList.length; i++){
      let x = tempListTag.classList[i]
      if(x == "collapse"){
        result = true;
        break
      }
    }
    if(result){
      tempListTag.classList.remove("collapse");
      tempIconTag.classList.remove("fa-angle-right");
      tempIconTag.classList.add("fa-angle-down");
    } else {
      tempListTag.classList.add("collapse");
      tempIconTag.classList.remove("fa-angle-down");
      tempIconTag.classList.add("fa-angle-right");
    }
  }

}
