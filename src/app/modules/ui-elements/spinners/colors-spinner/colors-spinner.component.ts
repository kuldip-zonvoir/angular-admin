import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-colors-spinner',
  templateUrl: './colors-spinner.component.html',
  styleUrls: ['./colors-spinner.component.scss']
})
export class ColorsSpinnerComponent implements OnInit {
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
    <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-dark" role="status">
    <span class="visually-hidden">Loading...</span>
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
