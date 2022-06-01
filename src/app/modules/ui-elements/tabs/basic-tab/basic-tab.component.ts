import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-tab',
  templateUrl: './basic-tab.component.html',
  styleUrls: ['./basic-tab.component.scss']
})
export class BasicTabComponent implements OnInit {

  tabId = "0";
  showCode = false;
  constructor() { }
  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
  <div>
  <tabset>
    <tab heading="Basic title" id="tab1">Basic content</tab>
    <tab heading="Basic Title 1">Basic content 1</tab>
    <tab heading="Basic Title 2">Basic content 2</tab>
  </tabset>
</div
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-tabs-basic',
    templateUrl: './basic.html'
  })
  export class DemoTabsBasicComponent {}
        `;

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }
}
