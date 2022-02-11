import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm= new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.pattern("^[a-z A-Z]+$")]),
    email:new FormControl("",[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    gender:new FormControl("",[Validators.required]),
    quali:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required,Validators.pattern((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/))]),


  })
  get fname(){
    return this.regForm.get("fname")
  }
  get email(){
    return this.regForm.get("email")
  }
  get gender(){
    return this.regForm.get("gender")
  }
  get quali(){
    return this.regForm.get("quali")
  }
  get Password(){
    return this.regForm.get("Password")
  }

  onSubmit(){
    console.log(this.regForm.value.pass);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
