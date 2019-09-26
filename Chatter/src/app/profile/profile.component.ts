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
    let tempIconTag = this.tag.nativeElement.querySelector("#icon_" + groupName);
    let tempListTag = this.tag.nativeElement.querySelector("#list_" + groupName);
    //console.log("tempIconTag: ", tempIconTag.attributes['ng-reflect-icon'].value);
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
      //tempIconTag.attributes.icon.value = "angle-right";
      //tempIconTag.attributes['ng-reflect-icon'].value = "angle-right";
    } else {
      tempListTag.classList.add("collapse");
      tempIconTag.classList.remove("fa-angle-down");
      tempIconTag.classList.add("fa-angle-right");
      //tempIconTag.attributes.icon.value = "angle-down";
      //tempIconTag.attributes['ng-reflect-icon'].value = "angle-down";
    }
  }

}
