import { Component, OnInit } from '@angular/core';
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: 'tabs',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css']
})
export class TabviewComponent implements OnInit {

  constructor() { }
  tabs: TabComponent[] = [];
  ngOnInit() {

  }

  addTab(tab:TabComponent){
    if(this.tabs.length === 0){
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  selectTab(tab:TabComponent){
    this.tabs.forEach(t=>t.active=false);
    tab.active=true;
  }

}
