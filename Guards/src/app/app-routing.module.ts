import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardnameGuard } from './Guard/guardname.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"reg",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[GuardnameGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
