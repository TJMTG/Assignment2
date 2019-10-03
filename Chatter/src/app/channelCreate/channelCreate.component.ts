import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SocketsService } from '../services/sockets.service';
import { GroupDataService } from '../services/group/data.service';

@Component({
  selector: 'app-channel-create',
  templateUrl: './channelCreate.component.html',
  styleUrls: ['./channelCreate.component.scss']
})
export class ChannelCreateComponent implements OnInit {

  urlParameterMongoID;
  
  //
  // Form: Create Channel
  //
  formName = "";

  //
  // Form Feedback
  //
  successMessage;
  failMessages;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private tag: ElementRef,
    private SocketsService: SocketsService,
    private GroupDataService: GroupDataService,
  ){}

  ngOnInit(){
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    } else {
      if(JSON.parse(sessionStorage.getItem("role")) == "regularUser"){
        this.router.navigateByUrl("/profile");
      }
    }
    this.SocketsService.initSocket();
    this.route.paramMap.subscribe((params)=>{
      this.urlParameterMongoID = params.get('mongoID');
    });
  }

  createChannelClicked(){
    let successFeedback = this.tag.nativeElement.querySelector("#successFeedback");
    successFeedback.style.display = "none";
    let failFeedback = this.tag.nativeElement.querySelector("#failFeedback");
    failFeedback.style.display = "none";
    let feedbackBar = this.tag.nativeElement.querySelector("#feedbackBar");
    feedbackBar.style.display = "none";
    this.successMessage = "";
    this.failMessages = [];
    let error = false;
    let feedback = [];
    if(this.formName == ""){
      error = true;
      feedback.push("Create Channel: name field is empty.");
    }
    if(error){
      this.failMessages = feedback;
      failFeedback.style.display = "block";
      feedbackBar.style.display = "block";
    } else {
      let channel = {
        "name": this.formName
      }
      console.log(this.formName);
      this.GroupDataService.updateChannels(this.urlParameterMongoID, channel.name).subscribe((data)=>{
        if(data.ok){
          this.successMessage = "Channel '" + channel.name + "' created.";
          successFeedback.style.display = "block";
          feedbackBar.style.display = "block";
          this.formName = "";
        } else {
          console.log(data);
          this.failMessages.push(data.message);
          failFeedback.style.display = "block";
          feedbackBar.style.display = "block";
        }
      });
    }
  }

}
