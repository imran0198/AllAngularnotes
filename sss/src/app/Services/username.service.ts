import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  constructor() { }
  getData(){
    return [
      {username:"immu",id:101,dept:"developer"},
      {username:"immu",id:101,dept:"developer"},
      {username:"immu",id:101,dept:"developer"},
      {username:"immu",id:101,dept:"developer"},
      {username:"immu",id:101,dept:"developer"},
    ]
  }
}
