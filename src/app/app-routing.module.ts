import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  {path: '',component:DashboardComponent},
  {path: 'users',component:UsersComponent},  
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'users/add',component:AddUserComponent},
  {path: 'users/edit/:id',component:EditUserComponent},
  {path: 'users/:id',component:UserDetailComponent},
  {path: 'settings',component:SettingsComponent},
  {path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
