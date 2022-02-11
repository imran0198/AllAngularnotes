import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor() { }
  getData(){                                 //step1 next user.ts
    return [
      {name:"immu",id:101,dept:"testing"},
      {name:"immu",id:101,dept:"testing"},
      {name:"immu",id:101,dept:"testing"},
      {name:"immu",id:101,dept:"testing"},
    ]
  }
}
