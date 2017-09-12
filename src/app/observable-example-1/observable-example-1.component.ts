import { Component, OnInit } from '@angular/core';
import { ObservableExample1 } from './observable-example-1';
import { Subscription } from 'rxjs';

@Component({
  selector: 'observable-example-1',
  templateUrl: './observable-example-1.component.html',
  styleUrls: ['./observable-example-1.component.css']
})
export class ObservableExample1Component implements OnInit {

  obsexample1: ObservableExample1;
  num: number;
  sub: Subscription;
  constructor() { 
    this.num = 0 ;
  }
//muss so deklariert werden oder kann nicht aufgerufen werden in callback;
  setnum = (n:number) =>{
    this.num = Math.random()*n;
  }
  ngOnInit() {
    this.obsexample1 = new ObservableExample1(1000);
  }
  
  start(){
    if(this.sub) this.sub.unsubscribe();
    this.sub = this.obsexample1.subcribe(this.setnum);
  }
}
