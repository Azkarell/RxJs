import { Component, OnInit, Input, ContentChild, AfterContentInit, QueryList, Query, ContentChildren, OnDestroy } from '@angular/core';
import { TabviewComponent } from "../tabview/tabview.component";
import { OnSelected } from "../on-selected";
import { EventRouterService } from "../event-router.service";
import { Fileinformation } from "../fileinformation";
import { Subscription } from 'rxjs';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit,  OnSelected, OnDestroy {
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
    this.tabs.removeTab(this);
  }

  ngAfterContentInit(): void {
  }
  OnSelected() {
    if(this.type)
      this.evR.put({filter:this.type});
    
  }

  @Input() type: string;
  @Input() tabTitle;

  private contents: Fileinformation[];
  private sub: Subscription;
  active:boolean;
  constructor(private tabs: TabviewComponent, private evR: EventRouterService) {
      tabs.addTab(this);
    
   }

  ngOnInit() {
    if(this.type){
      this.sub = this.evR.subscribe(this.type.trim() + "Update",() => this.evR.put({filter:"TabContentUpdate",value:this}));
      
    }
  }

  
}
