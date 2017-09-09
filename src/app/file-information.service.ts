import { Injectable } from '@angular/core';
import { EventRouterService } from './event-router.service';
import { Fileinformation } from './fileinformation';
import { Subscription, Subject } from 'rxjs';

@Injectable()
export class FileInformationService {

  private subject: Subject<Fileinformation[]>;
  private update = "FileUpdate";
  private datachanged = "dataChanged";
  private fileinformation: Fileinformation[];
  private sub : Subscription;
  constructor(private evR: EventRouterService) { 
    this.subject = new Subject<Fileinformation[]>();
  } 


  getFiles(callback: (t:Fileinformation[]) => void): Subscription{
    
    return this.subject.asObservable().subscribe(callback);
  }

  setFiles(files: Fileinformation[]) {
    this.fileinformation = files;
    this.subject.next(this.fileinformation);
  }

}
