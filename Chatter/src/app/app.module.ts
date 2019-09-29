import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ControlsComponent } from './controls/controls.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { GroupUpdateComponent } from './group-update/group-update.component';
import { ChannelCreateComponent } from './channel-create/channel-create.component';
import { ChannelUpdateComponent } from './channel-update/channel-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlsComponent,
    ProfileComponent,
    ChatComponent,
    UserCreateComponent,
    UserUpdateComponent,
    GroupCreateComponent,
    GroupUpdateComponent,
    ChannelCreateComponent,
    ChannelUpdateComponent
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
