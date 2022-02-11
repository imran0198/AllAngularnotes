import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  value1:any
  value2:any
  toDo:any

  constructor(private user:ServicesService) { }
 

  ngOnInit(){
    // this.user.getDat().subscribe((data)=>{
    //   this.value=data
    // })


  }
todo(){
  this.user.getDat().subscribe((data)=>{
    this.value1=data
    this.toDo="true"
    
  })
}
comp(){
  this.user.getDat().subscribe((data)=>{
    this.value2=data
    this.toDo="false"
  })
}
clear(){
    document.location.reload()

}
}
