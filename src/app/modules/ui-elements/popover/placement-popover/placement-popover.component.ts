import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-placement-popover',
  templateUrl: './placement-popover.component.html',
  styleUrls: ['./placement-popover.component.scss']
})
export class PlacementPopoverComponent implements OnInit {
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
      <button type="button" class="btn btn-default btn-secondary"
      popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      popoverTitle="Popover on top"
      placement="top">
    Popover on top
    </button>

    <button type="button" class="btn btn-default btn-secondary"
      popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      popoverTitle="Popover on right"
      placement="right">
    Popover on right
    </button>

    <button type="button" class="btn btn-default btn-secondary"
      popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      popoverTitle="Popover auto"
      placement="auto">
    Popover auto
    </button>

    <button type="button" class="btn btn-default btn-secondary"
      popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      popoverTitle="Popover on left"
      placement="left">
    Popover on left
    </button>

    <button type="button" class="btn btn-default btn-secondary"
      popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      popoverTitle="Popover on bottom"
      placement="bottom">
    Popover on bottom
    </button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-popover-placement',
      templateUrl: './placement.html'
    })
    export class DemoPopoverPlacementComponent {}
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
