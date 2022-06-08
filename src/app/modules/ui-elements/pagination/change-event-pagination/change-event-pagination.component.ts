import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-change-event-pagination',
  templateUrl: './change-event-pagination.component.html',
  styleUrls: ['./change-event-pagination.component.scss']
})
export class ChangeEventPaginationComponent implements OnInit {

  tabId = "0";
  showCode = false;
  currentPage = 4;
  smallnumPages = 0;
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
    <pagination [totalItems]="88" [ngModelOptions]="{standalone: true}" [(ngModel)]="currentPage" (numPages)="smallnumPages = $event"></pagination>
  
    <pre class="card custom-card card-block card-header mb-3">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-pagination-pages-count-changed',
    templateUrl: './pages-count-changed.html'
  })
  export class DemoPaginationPagesCountChangedComponent {
    currentPage = 4;
    smallnumPages = 0;
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
