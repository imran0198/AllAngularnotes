import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"loginpage",component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
