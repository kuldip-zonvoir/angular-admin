import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-pill-button',
  templateUrl: './pill-button.component.html',
  styleUrls: ['./pill-button.component.scss']
})
export class PillButtonComponent implements OnInit {
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
    <button type="button" class="btn btn-pill btn-primary mr-2 mb-2 ">Primary</button>
    <button type="button" class="btn btn-pill btn-warning mr-2 mb-2 ">Warning</button>
    <button type="button" class="btn btn-pill btn-secondary mr-2 mb-2 ">Secondary</button>
    <button type="button" class="btn btn-pill btn-success mr-2 mb-2 ">Success</button>
    <button type="button" class="btn btn-square btn-info mr-2 mb-2 ">Info</button>
    <button type="button" class="btn btn-square btn-dark mr-2 mb-2 ">Dark</button>
    <button type="button" class="btn btn-square btn-light mr-2 mb-2 ">Light</button>
    <button type="button" class="btn btn-square btn-link mr-2 mb-2 ">Link</button>
        `;
  tscode = `
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'demo-buttons-style',
      templateUrl: './style.html'
    })
    export class DemoStyleButtonsComponent {
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
