import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-link-badge',
  templateUrl: './link-badge.component.html',
  styleUrls: ['./link-badge.component.scss']
})
export class LinkBadgeComponent implements OnInit {
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
  <h1>Example heading <span class="badge bg-secondary">New</span></h1>
  <h2>Example heading <span class="badge bg-secondary">New</span></h2>
  <h3>Example heading <span class="badge bg-secondary">New</span></h3>
  <h4>Example heading <span class="badge bg-secondary">New</span></h4>
  <h5>Example heading <span class="badge bg-secondary">New</span></h5>
  <h6>Example heading <span class="badge bg-secondary">New</span></h6>
        `;
  tscode = `
    import { Component } from '@angular/core';

  @Component({
    selector: 'app-badges',
    templateUrl: './badges.component.html'
  })
  export class BadgesComponent {}
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
