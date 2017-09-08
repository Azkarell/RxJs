import { Component, OnInit } from '@angular/core';
import { SubjectExample } from "./subject-example";

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css']
})
export class SubjectExampleComponent implements OnInit {

  number: number;
  string: string;
  se: SubjectExample;
  
  constructor() { 
    this.se = new SubjectExample();
    this.se.getNumbers().subscribe(n => this.number = n);
    this.se.getStrings().subscribe(n => this.string = n);
  }
  ngOnInit() {
  }

  put(n:number){
    this.se.put(n);
  }
}
