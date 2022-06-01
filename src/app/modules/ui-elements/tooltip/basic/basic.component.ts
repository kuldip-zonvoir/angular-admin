import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  animations: [
    trigger('', [
      state('bottom', style({
        height: '250px',
        opacity: 1,

      })),
      state('top', style({
        height: '100px',
        opacity: 0.5,
      })),
      transition('* => *', [
        animate('2s')
      ]),
    ]),
  ]
})
export class BasicComponent implements OnInit {
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
    <button type="button" class="btn btn-primary" tooltip="Vivamus sagittis  faucibus.">
       Simple demo
    </button>
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-tooltip-basic',
    templateUrl: './basic.html'
  })
  export class DemoTooltipBasicComponent {}
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
