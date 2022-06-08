import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-min-sec-time',
  templateUrl: './min-sec-time.component.html',
  styleUrls: ['./min-sec-time.component.scss']
})
export class MinSecTimeComponent implements OnInit {
  tabId = "0";
  showCode = false;
  showMin: boolean = true;
  showSec: boolean = true;
  mytime: Date = new Date();
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
    <timepicker [ngModelOptions]="{standalone: true}" [(ngModel)]="mytime" [showMeridian]="isMeridian"></timepicker>
    <pre class="alert alert-info">Time is: {{mytime}}</pre>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-timepicker-basic',
      templateUrl: './basic.html'
    })
    export class DemoTimepickerBasicComponent {
      mytime: Date = new Date();
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
