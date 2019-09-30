import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    username:JSON.parse(sessionStorage.getItem("username")),
    role:JSON.parse(sessionStorage.getItem("role"))
  };

  groups = [
    {
      name:"group1", 
      channels:[
        {name:"channel1"}, 
        {name:"channel2"}, 
        {name:"channel3"}
      ]
    },
    {
      name:"group2", 
      channels:[
      ]
    },
    {
      name:"group3", 
      channels:[
        {name:"channelA"}, 
        {name:"channelB"}, 
        {name:"channelC"}
      ]
    }
  ];

  constructor(private router: Router, private tag: ElementRef) {}

  ngOnInit(){
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    }
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
