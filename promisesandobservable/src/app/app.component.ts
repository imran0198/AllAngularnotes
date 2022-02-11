import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promisesandobservable';

  flag:boolean=false
  toggle(){
    this.flag=!this.flag
  }
}
