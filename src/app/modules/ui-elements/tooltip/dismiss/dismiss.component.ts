import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dismiss',
  templateUrl: './dismiss.component.html',
  styleUrls: ['./dismiss.component.scss']
})
export class DismissComponent implements OnInit {
  tabId = "0"
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
  <button type="button" class="btn btn-success"
  tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  triggers="focus">
    Dismissible tooltip
  </button>
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-tooltip-dismiss',
    templateUrl: './dismiss.html'
  })
  export class DemoTooltipDismissComponent {}
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
