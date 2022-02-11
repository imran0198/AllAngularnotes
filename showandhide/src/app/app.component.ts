import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showandhide';
  arr:any
  flag:any
  onClick(){
    if(this.flag===false){
      this.flag=true
    }else{
      this.flag=false
    }
  }

array(){
  this.arr=[1,2,3,4,556,77]
}



}
