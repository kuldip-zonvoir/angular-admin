import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-pagination',
  templateUrl: './basic-pagination.component.html',
  styleUrls: ['./basic-pagination.component.scss']
})
export class BasicPaginationComponent implements OnInit {
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
   <pagination [totalItems]="30"></pagination>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-pagination-basic',
      templateUrl: './basic.html'
    })
    export class DemoPaginationBasicComponent {}
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
