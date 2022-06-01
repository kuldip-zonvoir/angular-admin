import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-glow-spinner',
  templateUrl: './glow-spinner.component.html',
  styleUrls: ['./glow-spinner.component.scss']
})
export class GlowSpinnerComponent implements OnInit {
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
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-dark" role="status">
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
