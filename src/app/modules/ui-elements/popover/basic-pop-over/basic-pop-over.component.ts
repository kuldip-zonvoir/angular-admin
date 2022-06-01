import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-pop-over',
  templateUrl: './basic-pop-over.component.html',
  styleUrls: ['./basic-pop-over.component.scss']
})
export class BasicPopOverComponent implements OnInit {
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
    <button type="button" class="btn btn-primary"
    popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
     Live demo
    </button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-popover-basic',
      templateUrl: './basic.html'
    })
    export class DemoPopoverBasicComponent {}
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
