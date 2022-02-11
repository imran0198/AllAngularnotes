import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"user",loadChildren:()=>import('./userdetailes/userdetailes.module').then(m=>m.UserdetailesModule)}
  // {path:"user",loadChildren:"./userdetailes/userdetailes.module#UserdetailesModule"}   //4th step next to app html
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
