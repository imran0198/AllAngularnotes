import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../Services/userservices.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  value:any  //3rd step

  constructor(private user:UserservicesService) { }   //2nd step dependency injection

  ngOnInit(): void {
    this.value=this.user.getData()      //4th step next user.html            
  }

}
