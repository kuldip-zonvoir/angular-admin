import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-meridian-time',
  templateUrl: './meridian-time.component.html',
  styleUrls: ['./meridian-time.component.scss']
})
export class MeridianTimeComponent implements OnInit {
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
