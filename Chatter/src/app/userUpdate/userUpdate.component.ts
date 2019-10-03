import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../classes/user/user';
import { UserDataService } from '../services/user/data.service';
import { ImageUploadService } from '../services/image/upload.service';



@Component({
  selector: 'app-user-update',
  templateUrl: './userUpdate.component.html',
  styleUrls: ['./userUpdate.component.scss']
})
export class UserUpdateComponent implements OnInit {

  loggedInUsername = JSON.parse(sessionStorage.getItem("username"));
  loggedInRole = JSON.parse(sessionStorage.getItem("role"));
  urlParameterMongoID;

  //
  // Feedback
  //
  successMessage = "";
  failMessages:Array<string> = [""];

  //
  // Form: Update User
  //
  formImage = null;
  formUsername = "";
  formPassword = "";
  formRole = "";

  //
  // Target User Infomation
  //
  user = {
    "mongoID": null,
    "image": "",
    "username": "",
    "password": "",
    "role":""
  }
  oldUsername = "";
  oldRole = "";

  constructor(
    private UserDataService: UserDataService,
    private route: ActivatedRoute, 
    private router: Router,
    private tag: ElementRef,
    private ImageUploadService: ImageUploadService
  ){}

  ngOnInit() {
    if(sessionStorage.getItem("username") == null){
      this.router.navigateByUrl("/login");
    } else {
      if(JSON.parse(sessionStorage.getItem("role")) == "regularUser"){
        this.router.navigateByUrl("/profile");
      }
    }
    this.route.paramMap.subscribe((params)=>{
      this.urlParameterMongoID = params.get('mongoID');
    });
    this.UserDataService.retrieve(this.urlParameterMongoID).subscribe((data)=>{
      if(data.ok){
        console.log(data);
        this.user.mongoID = data.results[0]._id;
        this.user.username = data.results[0].username;
        this.user.password = data.results[0].password;
        this.user.role = data.results[0].role;
        this.formUsername = this.user.username;
        this.formPassword = this.user.password;
        this.formRole = this.user.role;
      } else {
        console.log("Failed to retrieve data.");
      }
    });
  }
 
  //updates the users information in the databse when run
  updateUserClicked(){
    console.log("role form: ", this.formRole);
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
    if(this.formUsername == ""){
      error = true;
      feedback.push("Update User: username field is empty.");
    }
    if(this.formPassword == ""){
      error = true;
      feedback.push("Update User: password field is empty.");
    }
    if(this.formRole == ""){
      error = true;
      feedback.push("Update User: role field is empty.");
    }
    if(error){
      this.failMessages = feedback;
      failFeedback.style.display = "block";
      feedbackBar.style.display = "block";
    } else {
      if(this.formImage == null){
        this.user.username = this.formUsername;
        this.user.password = this.formPassword;
        this.user.role = this.formRole;
        this.UserDataService.update(this.user).subscribe((data)=>{
          console.log(data.ok);
          if(data.ok){
            this.successMessage = "User '" + this.user.username + "' successfully updated.";
            successFeedback.style.display = "block";
            feedbackBar.style.display = "block";
          } else {
            this.failMessages.push(data.message);
            failFeedback.style.display = "block";
            feedbackBar.style.display = "block";
          }
        });
      } else {
        const fd = new FormData();
        fd.append("image", this.formImage, this.formImage.name);
        this.ImageUploadService.imageUpload(fd).subscribe(res=>{
          console.log(res);
          this.user.image = res.data.filename;
          this.user.username = this.formUsername;
          this.user.password = this.formPassword;
          this.user.role = this.formRole;
          this.UserDataService.update(this.user).subscribe((data)=>{
            if(data.ok){
              this.successMessage = "User '" + this.user.username + "' successfully updated.";
              successFeedback.style.display = "block";
              feedbackBar.style.display = "block";
            } else {
              this.failMessages.push(data.message);
              failFeedback.style.display = "block";
              feedbackBar.style.display = "block";
            }
          });
        });
      }
    }
  }

  //manages the file uploded to the form
  fileSelectedChanged(event){
    console.log("File changed.");
    this.formImage = event.target.files[0];
  }

}
