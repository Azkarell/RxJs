import { Component, OnInit } from '@angular/core';
import { SharedObservable } from './shared-observable-example';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-observable-example',
  templateUrl: './shared-observable-example.component.html',
  styleUrls: ['./shared-observable-example.component.css']
})
export class SharedObservableExampleComponent implements OnInit {

  private sharedobs : SharedObservable;
  private subscriptions : Subscription[];
  numbers: number[];
  constructor() {
    this.sharedobs = new SharedObservable();
    this.numbers = [];
    this.subscriptions = [];
   }

  ngOnInit() {
    
  }

  add(){
    var ind = this.subscriptions.length;
    this.numbers.push(0);
    this.subscriptions.push(this.sharedobs.subscribeShared((n:number)=> this.numbers[ind] = n));
  }
  remove(){
    this.subscriptions[this.subscriptions.length-1].unsubscribe();
    this.subscriptions.splice(this.subscriptions.length-1,1);
    this.numbers.splice(this.numbers.length -1, 1);
  }
  addnot(){
    var ind = this.subscriptions.length;
    this.numbers.push(0);
    this.subscriptions.push(this.sharedobs.subscribe((n:number)=>this.numbers[ind] = n));
  }
}
