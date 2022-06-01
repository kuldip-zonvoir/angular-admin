import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-rounded-pagination',
  templateUrl: './rounded-pagination.component.html',
  styleUrls: ['./rounded-pagination.component.scss']
})
export class RoundedPaginationComponent implements OnInit {
  tabId = "0";
  showCode = false;
  isMeridian = false;
  mytime: Date = new Date();
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
    <pagination [boundaryLinks]="true" [totalItems]="77"
    previousText="&lsaquo;" nextText="&rsaquo;" firstText="&laquo;" lastText="&raquo;">
  </pagination>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-pagination-custom-links-content',
      templateUrl: './custom-links-content.html'
    })
    export class DemoPaginationRoundedLinksContentComponent {}
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
