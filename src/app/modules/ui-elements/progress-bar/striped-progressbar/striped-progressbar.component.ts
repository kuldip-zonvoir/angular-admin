import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-striped-progressbar',
  templateUrl: './striped-progressbar.component.html',
  styles: [
  ]
})
export class StripedProgressbarComponent implements OnInit {

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
    <div class="mb-3">
    <progressbar [value]="22" type="warning" [striped]="true">47%</progressbar>
  </div>
  <div class="mb-2">
    <progressbar max="200" [value]="166" type="danger" [striped]="true" [animate]="true"><i>166 / 200</i></progressbar>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-progressbar-static',
      templateUrl: './static.html'
    })
    export class DemoProgressbarStripeComponent {}
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
