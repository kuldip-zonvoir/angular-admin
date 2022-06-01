import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-ratting',
  templateUrl: './basic-ratting.component.html',
  styleUrls: ['./basic-ratting.component.scss']
})
export class BasicRattingComponent implements OnInit {
  tabId = "0";
  showCode = false;
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;
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
    <rating [(ngModel)]="rate" [max]="max" [readonly]="isReadonly"></rating>
  <div class="card">
      <pre class="card-block card-header" style="margin:15px 0;">Rate: <b>{{rate}}</b> </pre>
  </div
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-rating-basic',
      templateUrl: './basic.html'
    })
    export class DemoRatingBasicComponent {
      max: number = 10;
      rate: number = 7;
      isReadonly: boolean = true;
    }
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
