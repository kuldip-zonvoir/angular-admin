import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {
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
    <a href="#" class="btn btn-link-success">Success</a>
    <a href="#" class="btn btn-link-primary">Primary</a>
    <a href="#" class="btn btn-link-danger">Danger</a>
    <a href="#" class="btn btn-link-info">Info</a>
    <a href="#" class="btn btn-link-warning">Warning</a>
    <a href="#" class="btn btn-link-dark">Dark</a>
        `;
  tscode = `
    import { Component } from '@angular/core';
      
    @Component({
      selector: 'demo-buttons-link',
      templateUrl: './link.html'
    })
    export class DemoLinkButtonsComponent {
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
