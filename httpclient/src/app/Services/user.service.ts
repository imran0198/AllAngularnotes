import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }//4th step
  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users") //5step next usercoponent.ts
  }
}
