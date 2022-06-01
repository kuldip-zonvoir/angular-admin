import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dynanic',
  templateUrl: './dynanic.component.html',
  styleUrls: ['./dynanic.component.scss']
})
export class DynanicComponent implements OnInit {
  tabId = "0"
  showCode = false;
  content: string = 'Simple tooltip with binding.';
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
    selector: 'demo-tooltip-dynamic',
    templateUrl: './dynamic.html'
  })
  export class DemoTooltipDynamicComponent {
    content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
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
