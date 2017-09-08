import { Component, OnInit, Input } from '@angular/core';
import { TabviewComponent } from "../tabview/tabview.component";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit {

  @Input() tabTitle;
  active:boolean;
  constructor(tabs: TabviewComponent) {
      tabs.addTab(this);
   }

  ngOnInit() {
  }

}
