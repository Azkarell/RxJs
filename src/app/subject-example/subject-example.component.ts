import { Component, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, OnDestroy,
   ApplicationRef } from '@angular/core';
import { SubjectExample } from "./subject-example";
import { OnSelected } from "../on-selected";
import { EventRouterService } from "../event-router.service";
import { Subscription } from "rxjs/Rx";
import { Fileinformation } from "../fileinformation";
import { Http, ResponseContentType } from '@angular/http';
import { FileInformationService } from '../file-information.service';
import { SourceCodeViewerComponent } from '../source-code-viewer/source-code-viewer.component';

@Component({
  selector: 'subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css']
})
export class SubjectExampleComponent implements OnInit  {


  private number: number;
  private string: string;
  private se: SubjectExample;

  constructor(event: EventRouterService, infos: FileInformationService,  http: Http)  { 

  }
  
  
  ngOnInit() {
    this.se = new SubjectExample();
    this.se.getNumbers().subscribe(n => this.number = n);
    this.se.getStrings().subscribe(n => this.string = n);

  }
   

  put(n:number){
    this.se.put(n);
  }

  
}
