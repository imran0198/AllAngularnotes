import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient) { }
  getDat(){
   return this.http.get("http://jsonplaceholder.typicode.com/todos")
  }
}
