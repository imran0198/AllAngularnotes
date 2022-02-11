import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceGuardService {

  constructor() { }
  getData(){
    // let rfname=JSON.parse(localStorage.getItem("rfname"))
    // let rpass=JSON.parse(localStorage.getItem("rpass"))

    
    // let lfname=JSON.parse(localStorage.getItem("lfname"))
    // let lpass=JSON.parse(localStorage.getItem("lpass"))

    // if(rfname===lfname && rpass===lpass){
    //   return true
    // }else{
    //   return false
    // }
return true
  }
}
