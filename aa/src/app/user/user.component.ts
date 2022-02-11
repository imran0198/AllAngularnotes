import { Component, OnInit } from '@angular/core';
import { UserdetailesService } from '../Services/userdetailes.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  result:any
  constructor(private user:UserdetailesService) { }

  ngOnInit(): void { 
    this.user.getData().subscribe(data=>{
      this.result=data
    })
  }

}
