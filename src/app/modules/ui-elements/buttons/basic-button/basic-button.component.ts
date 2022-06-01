import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {
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
    <button type="button" class="btn btn-primary mr-2 mb-2 ">Primary</button>
    <button type="button" class="btn btn-warning mr-2 mb-2 ">Warning</button>
    <button type="button" class="btn btn-secondary mr-2 mb-2 ">Secondary</button>
    <button type="button" class="btn btn-success mr-2 mb-2 ">Success</button>
    <button type="button" class="btn btn-info mr-2 mb-2 ">Info</button>
    <button type="button" class="btn btn-dark mr-2 mb-2 ">Dark</button>
    <button type="button" class="btn btn-light mr-2 mb-2 ">Light</button>
    <button type="button" class="btn btn-link mr-2 mb-2 ">Link</button>             
        `;
  tscode = `
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'demo-buttons-basic',
      templateUrl: './basic.html'
    })
    export class DemoButtonsBasicComponent {}
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
