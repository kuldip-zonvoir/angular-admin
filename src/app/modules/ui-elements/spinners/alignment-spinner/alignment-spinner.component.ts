import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-alignment-spinner',
  templateUrl: './alignment-spinner.component.html',
  styleUrls: ['./alignment-spinner.component.scss']
})
export class AlignmentSpinnerComponent implements OnInit {
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
    <div class="d-flex justify-content-start">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
  <div class="d-flex justify-content-end">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
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
