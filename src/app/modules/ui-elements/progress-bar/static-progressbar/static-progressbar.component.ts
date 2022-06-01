import { Component, OnInit } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";

@Component({
  selector: "app-static-progressbar",
  templateUrl: "./static-progressbar.component.html",
  styles: [],
})
export class StaticProgressbarComponent implements OnInit {
  tabId = "0";
  showCode = false;

  constructor() {}

  ngOnInit(): void {}
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
    <div class="row">
    <div class="col-sm-4">
      <div class="mb-2">
        <progressbar [value]="55"></progressbar>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="m-b-8">
        <progressbar [value]="22" type="warning" >22%</progressbar>
      </div>
    </div>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-progressbar-static',
      templateUrl: './static.html'
    })
    export class DemoProgressbarStaticComponent {}
        `;

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: "{...}",
      top: "{...}",
      value: "{...}",
    };
  }
}
