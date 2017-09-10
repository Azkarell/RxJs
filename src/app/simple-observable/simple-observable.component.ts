import { Component, OnInit, OnDestroy } from '@angular/core';
import { SimpleObservableExample } from "./simple-observable-example";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'observable-example',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent implements OnInit {


  soe: SimpleObservableExample;

  constructor() { 
  }


  ngOnInit() {
    this.soe = new SimpleObservableExample();
  }

}
