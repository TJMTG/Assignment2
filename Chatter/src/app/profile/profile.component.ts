import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public isCollapsed = false;

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
  ]

  constructor(private tag: ElementRef) {}

  ngOnInit() {
  }

  toggleCollapse(groupName){
    console.log("+-------------------------------------------\\");
    console.log("| A group div was clicked.");
    console.log("|     value inputed for groupName->", groupName);
    console.log("+-------------------------------------------/");
    console.log();
    let temp = this.tag.nativeElement.querySelector("#" + groupName);
    let i;
    let result = false;
    for(i=0; i < temp.classList.length; i++){
      let x = temp.classList[i]
      if(x == "collapse"){
        result = true;
        break
      }
    }
    if(result){
      temp.classList.remove("collapse");
    } else {
      temp.classList.add("collapse");
    }
  }

}
