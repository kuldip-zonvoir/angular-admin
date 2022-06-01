import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-varient-badge',
  templateUrl: './varient-badge.component.html',
  styleUrls: ['./varient-badge.component.scss']
})
export class VarientBadgeComponent implements OnInit {
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
    <span class="badge bg-primary">Primary</span>
  <span class="badge bg-secondary">Secondary</span>
  <span class="badge bg-success">Success</span>
  <span class="badge bg-danger">Danger</span>
  <span class="badge bg-warning text-dark">Warning</span>
  <span class="badge bg-info text-dark">Info</span>
  <span class="badge bg-light text-dark">Light</span>
  <span class="badge bg-dark">Dark</span>
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
