import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-badge',
  templateUrl: './basic-badge.component.html',
  styleUrls: ['./basic-badge.component.scss']
})
export class BasicBadgeComponent implements OnInit {
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
  <h1>Example heading <span class="badge badge-secondary">New</span></h1>
  <h2>Example heading <span class="badge badge-secondary">New</span></h2>
  <h3>Example heading <span class="badge badge-secondary">New</span></h3>
  <h4>Example heading <span class="badge badge-secondary">New</span></h4>
  <h5>Example heading <span class="badge badge-secondary">New</span></h5>
  <h6>Example heading <span class="badge badge-secondary">New</span></h6>
        `;
  tscode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html'
  })
  export class BadgeComponent {}
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
