import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss']
})
export class OutlineButtonComponent implements OnInit {
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
    <button type="button" class="btn btn-outline-primary mr-2 mb-2 ">Primary</button>
    <button type="button" class="btn btn-outline-warning mr-2 mb-2 ">Warning</button>
    <button type="button" class="btn btn-outline-secondary mr-2 mb-2 ">Secondary</button>
    <button type="button" class="btn btn-outline-success mr-2 mb-2 ">Success</button>
    <button type="button" class="btn btn-outline-info mr-2 mb-2 ">Info</button>
    <button type="button" class="btn btn-outline-dark mr-2 mb-2 ">Dark</button>
    <button type="button" class="btn btn-outline-light mr-2 mb-2 ">Light</button>
    <button type="button" class="btn btn-outline-link mr-2 mb-2 ">Link</button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-buttons-outline',
      templateUrl: './outline.html'
    })
    export class DemoOutLineButtonsComponent {}
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
