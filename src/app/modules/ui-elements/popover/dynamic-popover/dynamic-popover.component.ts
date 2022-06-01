import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dynamic-popover',
  templateUrl: './dynamic-popover.component.html',
  styleUrls: ['./dynamic-popover.component.scss']
})
export class DynamicPopoverComponent implements OnInit {
  tabId = "0";
  showCode = false;
  title = 'Welcome word';
  content = 'Simple Popover.';
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
<button type="button" class="btn btn-info" [popover]="content" [popoverTitle]="title"> Simple binding </button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-popover-dynamic',
      templateUrl: './dynamic.html'
    })
    export class DemoPopoverDynamicComponent {
      title = 'Welcome word';
      content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
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
