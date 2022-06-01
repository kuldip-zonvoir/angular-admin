import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-full-width-tab',
  templateUrl: './full-width-tab.component.html',
  styleUrls: ['./full-width-tab.component.scss']
})
export class FullWidthTabComponent implements OnInit {
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
  <tabset [justified]="true">
  <tab heading="Justified">Justified content</tab>
  <tab heading="SJ">Short Labeled Justified content</tab>
  <tab heading="Long Justified">Long Labeled Justified content</tab>
</tabset>
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-tabs-justified',
    templateUrl: './justified.html'
  })
  export class DemoTabsJustifiedComponent {}
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
