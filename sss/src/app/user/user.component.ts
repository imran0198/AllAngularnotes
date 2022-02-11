import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../Services/username.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  value
  constructor( private user:UsernameService) { }


  ngOnInit(): void {
    this.value=this.user.getData()
  }

}
