import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import{filter} from 'rxjs/operators'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {

  constructor() { }
  mySubscription
  count=0;

  ngOnInit(): void {

    const promise=new Promise(resolve=>{
      console.log("promise has been called1");
      
      setTimeout(() => {
        resolve ("data1 from promise")
        resolve ("data2 from promise ")
  
      }, 1000);      
    })

    //Listening the promises
    promise.then(result=>{console.log(result);
    })


    //observables
    const observable=new Observable(sub=>{
      setTimeout(() => {
      sub.next("data1 from observable")
      sub.next("data2 from observable")
      sub.next("data3 from observable")
      sub.next("data4 from observable")
      }, 1000);
    })

    //listening the observable
 observable.pipe(filter(data=>data==="data4 from observable"))  //import filter from "rxjs/operators"
.subscribe(result=>{console.log(result);})

  //unsbuscribe or stopping the observable
  const observables= new Observable(sub=>{
    setInterval(()=>{
      this.count++
      sub.next(this.count)

    },1000)
  })
  this.mySubscription=observables.subscribe((results)=>{
    console.log(results);
    
  })
  }
  ngOnDestroy(): void {
      this.mySubscription.unsubscribe()
  }
}
