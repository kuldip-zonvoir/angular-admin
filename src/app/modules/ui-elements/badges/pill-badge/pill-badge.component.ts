import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-pill-badge',
  templateUrl: './pill-badge.component.html',
  styleUrls: ['./pill-badge.component.scss']
})
export class PillBadgeComponent implements OnInit {
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
    <span class="badge rounded-pill bg-primary">Primary</span>
    <span class="badge rounded-pill bg-secondary">Secondary</span>
    <span class="badge rounded-pill bg-success">Success</span>
    <span class="badge rounded-pill bg-danger">Danger</span>
    <span class="badge rounded-pill bg-warning text-dark">Warning</span>
    <span class="badge rounded-pill bg-info text-dark">Info</span>
    <span class="badge rounded-pill bg-light text-dark">Light</span>
    <span class="badge rounded-pill bg-dark">Dark</span>
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
