import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';  //6th
import { Routes } from '@angular/router';


const hello:Routes=[
  {path:"",component:ContactComponent}
]


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(hello)
  ]
})
export class UserdetailesModule { }
