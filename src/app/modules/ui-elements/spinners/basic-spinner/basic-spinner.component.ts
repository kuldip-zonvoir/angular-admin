import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-spinner',
  templateUrl: './basic-spinner.component.html',
  styleUrls: ['./basic-spinner.component.scss']
})
export class BasicSpinnerComponent implements OnInit {
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
    <div class="spinner-border" role="status">
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
