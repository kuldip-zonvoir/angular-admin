import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-size-spinner',
  templateUrl: './size-spinner.component.html',
  styleUrls: ['./size-spinner.component.scss']
})
export class SizeSpinnerComponent implements OnInit {
  tabId = "0";
  showCode = false;
  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
    <div class="spinner-border spinner-border-sm mr-2" role="status">
    <span class="visually-hidden"></span>
  </div>
  <div class="spinner-grow spinner-grow-sm mr-2" role="status">
    <span class="visually-hidden"></span>
  </div>
  <div class="spinner-border spinner-border-lg mr-2" role="status">
    <span class="visually-hidden"></span>
  </div>
  <div class="spinner-grow spinner-grow-lg mr-2" role="status">
    <span class="visually-hidden"></span>
  </div>
        `;
  tscode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-spinners',
    templateUrl: './spinners.component.html'
  })
  export class SpinnersComponent {}
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
