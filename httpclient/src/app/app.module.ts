import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailesComponent } from './userdetailes/userdetailes.component';
import{HttpClientModule}from '@angular/common/http'  //1st step
@NgModule({ 
  declarations: [
    AppComponent,
    UserdetailesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   //2nd step next user service .ts
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
