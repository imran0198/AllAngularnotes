import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  onSubmit(loginForm:NgForm){
    console.log(loginForm.value);
    // localStorage.setItem("lfname",JSON.stringify(loginForm.value.fname))
    // localStorage.setItem("lpass",JSON.stringify(loginForm.value.pass))

    // let lfname=JSON.parse(localStorage.getItem("lfname"))
    // let lpass=JSON.parse(localStorage.getItem("lpass"))
    
  }

  ngOnInit(): void {
  }

}
