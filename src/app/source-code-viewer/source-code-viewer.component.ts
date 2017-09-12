import { Component, OnInit, Input } from '@angular/core';
import { Fileinformation } from '../fileinformation';
import { Subscription } from 'rxjs';
import { FileInformationService } from '../file-information.service';
import { EventRouterService } from '../event-router.service';
import { ResponseContentType, Http } from '@angular/http';

@Component({
  selector: 'source-code-viewer',
  templateUrl: './source-code-viewer.component.html',
  styleUrls: ['./source-code-viewer.component.css']
})
export class SourceCodeViewerComponent implements OnInit {

@Input() url: string;
@Input() files: string[];
show : boolean;
  ngOnInit(): void {
    this.show = false;
    this.loadFromServer();
}

OnSelected(){
    this.fileinfos.setFiles(this.filecontents);        
}

protected filecontents: Fileinformation[];
private sub: Subscription;
constructor( private fileinfos: FileInformationService, private evR: EventRouterService,
    private http: Http){
    this.filecontents = [];
}

loadFromServer(){
    this.files.forEach(element => {
        this.http.get(this.url + element, {responseType: ResponseContentType.Text})
        .map(r => new Fileinformation(element,r.text()) )
        .subscribe(t => { this.filecontents.push(t)});
       
      });
}
toggleShow(){
    this.show = !this.show;
}
}
