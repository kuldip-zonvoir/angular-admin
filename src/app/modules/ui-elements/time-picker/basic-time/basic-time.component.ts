import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-time',
  templateUrl: './basic-time.component.html',
  styleUrls: ['./basic-time.component.scss']
})
export class BasicTimeComponent implements OnInit {
  tabId = "0";
  showCode = false;
  isMeridian = false;
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
    <timepicker [(ngModel)]="mytime" [showMeridian]="isMeridian"></timepicker>
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
