import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// for 'const routes: Route = []
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ControlsComponent } from './controls/controls.component';

import { UserCreateComponent } from './userCreate/userCreate.component';
import { UserUpdateComponent } from './userUpdate/userUpdate.component';

import { GroupCreateComponent } from './groupCreate/groupCreate.component';
import { GroupUpdateComponent } from './groupUpdate/groupUpdate.component';

import { ChannelCreateComponent } from './channelCreate/channelCreate.component';
import { ChannelUpdateComponent } from './channelUpdate/channelUpdate.component';

import { ChatComponent } from './chat/chat.component';

//

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'controls', component: ControlsComponent},
  {path: 'userCreate', component: UserCreateComponent},
  {path: 'userUpdate/:mongoID', component: UserUpdateComponent},
  {path: 'groupCreate', component: GroupCreateComponent},
  {path: 'groupUpdate/:mongoID', component: GroupUpdateComponent},
  {path: 'channelCreate/:mongoID', component: ChannelCreateComponent},
  {path: 'channelUpdate/:mongoID/:channelname', component: ChannelUpdateComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
