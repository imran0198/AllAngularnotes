import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@Output()
message:EventEmitter<any>=new EventEmitter<any>()
passData(){
   this.message.emit("child copmponent is excected")
}

  ngOnInit(): void {
  }

}
