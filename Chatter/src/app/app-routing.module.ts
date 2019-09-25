import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// for 'const routes: Route = []
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ControlsComponent } from './controls/controls.component';
import { ChatComponent } from './chat/chat.component';
//

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'controls', component: ControlsComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
