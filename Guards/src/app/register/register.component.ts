import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  onSubmit(regForm:NgForm){
    console.log(regForm.value);
    // localStorage.setItem("rfname",JSON.stringify(regForm.value.fname))
    // localStorage.setItem("rpass",JSON.stringify(regForm.value.pass))


    // let rfname=JSON.parse(localStorage.getItem("rfname"))
    // let rpass=JSON.parse(localStorage.getItem("rpass"))
    
  }

  ngOnInit(): void {
  }

}
