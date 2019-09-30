import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ControlsComponent } from './controls/controls.component';
import { ProfileComponent } from './profile/profile.component';

import { UserCreateComponent } from './userCreate/userCreate.component';
import { UserUpdateComponent } from './userUpdate/userUpdate.component'
import { GroupCreateComponent } from './groupCreate/groupCreate.component';
import { GroupUpdateComponent } from './groupUpdate/groupUpdate.component';
import { ChannelCreateComponent } from './channelCreate/channelCreate.component';
import { ChannelUpdateComponent } from './channelUpdate/channelUpdate.component';

import { ChatComponent } from './chat/chat.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlsComponent,
    UserCreateComponent,
    UserUpdateComponent,
    GroupCreateComponent,
    GroupUpdateComponent,
    ChannelCreateComponent,
    ChannelUpdateComponent,
    ProfileComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
