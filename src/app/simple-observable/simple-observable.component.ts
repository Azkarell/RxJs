import { Component, OnInit } from '@angular/core';
import { SimpleObservableExample } from "./simple-observable-example";

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent implements OnInit {
  soe : SimpleObservableExample;
  constructor() { 
    this.soe = new SimpleObservableExample();
  }

  ngOnInit() {
  }

}
