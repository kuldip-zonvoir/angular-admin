import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-link-color-alert',
  templateUrl: './link-color-alert.component.html',
  styleUrls: ['./link-color-alert.component.scss']
})
export class LinkColorAlertComponent implements OnInit {
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
    <alert type="success">
    <strong>Well done!</strong> A simple  primary alert needs <a href="#" class="alert-link">your attention</a> 
  </alert>
  <alert type="info">
    <strong>Heads up!</strong> A simple  primary alert needs <a href="#" class="alert-link">your attention</a>
  </alert>
  <alert type="warning">
    <strong>Warning!</strong> A simple  primary alert needs <a href="#" class="alert-link">your attention</a>
  </alert>
  <alert type="danger">
    <strong>Oh snap!</strong> A simple  primary alert needs <a href="#" class="alert-link">your attention</a>
  </alert>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-alert-link',
      templateUrl: './link.html'
    })
    export class DemoAlertLinkComponent {}
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
