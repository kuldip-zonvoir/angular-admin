import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.scss']
})
export class PlacementComponent implements OnInit {
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
    <button type="button" class="btn btn-default btn-secondary mb-2"
    tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    placement="top">
  Tooltip on top
  </button>

  <button type="button" class="btn btn-default btn-secondary mb-2"
    tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    placement="right">
  Tooltip on right
  </button>

  <button type="button" class="btn btn-default btn-secondary mb-2"
    tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    placement="auto">
  Tooltip auto
  </button>

  <button type="button" class="btn btn-default btn-secondary mb-2"
    tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    placement="left">
  Tooltip on left
  </button>

  <button type="button" class="btn btn-default btn-secondary mb-2"
    tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    placement="bottom">
  Tooltip on bottom
  </button>
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-tooltip-placement',
    templateUrl: './placement.html'
  })
  export class DemoTooltipPlacementComponent {}
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
