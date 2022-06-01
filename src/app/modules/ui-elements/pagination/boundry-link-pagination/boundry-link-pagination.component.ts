import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-boundry-link-pagination',
  templateUrl: './boundry-link-pagination.component.html',
  styleUrls: ['./boundry-link-pagination.component.scss']
})
export class BoundryLinkPaginationComponent implements OnInit {
  tabId = "0";
  showCode = false;
  showBoundaryLinks = true;
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
    <div class="row">
    <div class="col-xs-12 col-12">
      <pagination [boundaryLinks]="showBoundaryLinks" [totalItems]="55"></pagination>
    </div>
  </div>
  <button type="button" class="btn btn-info" (click)="showBoundaryLinks = !showBoundaryLinks">Hide/show boundary links</button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
  @Component({
    selector: 'demo-pagination-boundary-links',
    templateUrl: './boundary-links.html'
  })
  export class DemoPaginationBoundaryLinksComponent {
    showBoundaryLinks = true;
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
