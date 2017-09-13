import {
  Component, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, OnDestroy,
  ApplicationRef
} from '@angular/core';
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
export class SubjectExampleComponent implements OnInit {


  private string: string;
  private se: SubjectExample;
  private sub: Subscription;
  constructor() {

  }


  ngOnInit() {
    this.se = new SubjectExample();
    this.sub = this.se.getSharedObservable().scan((s1: string, s2: string) => s1 + " " + s2).subscribe(s => this.string = s);

  }
  put(n: string) {
    this.se.put(n);
  }


}
