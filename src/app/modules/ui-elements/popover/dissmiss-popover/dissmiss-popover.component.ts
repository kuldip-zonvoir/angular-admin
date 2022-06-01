import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dissmiss-popover',
  templateUrl: './dissmiss-popover.component.html',
  styleUrls: ['./dissmiss-popover.component.scss']
})
export class DissmissPopoverComponent implements OnInit {
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
    <button type="button" class="btn btn-success" popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Dismissible popover" triggers="focus">
    Dismissible popover
    </button
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-popover-dismiss',
    templateUrl: './dismiss.html'
  })
  export class DemoPopoverDismissComponent {}
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
