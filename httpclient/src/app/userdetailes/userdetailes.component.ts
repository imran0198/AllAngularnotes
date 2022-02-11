import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-userdetailes',
  templateUrl: './userdetailes.component.html',
  styleUrls: ['./userdetailes.component.css']
})
export class UserdetailesComponent implements OnInit {
  result: Object; //7th step

  constructor(private user:UserService) { } //6th step

  ngOnInit(): void {
    this.user.getData().subscribe(data=>{   //8th step next usercomponent.html
     this.result=data
    })
  }

}
