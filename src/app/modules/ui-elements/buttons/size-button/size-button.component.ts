import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-size-button',
  templateUrl: './size-button.component.html',
  styleUrls: ['./size-button.component.scss']
})
export class SizeButtonComponent implements OnInit {
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
    <button type="button" class="btn btn-primary px-2 py-2 mr-2 mb-2 ">Primary</button>
    <button type="button" class="btn btn-warning px-3 py-3 mr-2 mb-2 ">Warning</button>
    <button type="button" class="btn btn-success px-4 py-4 mr-2 mb-2 ">Success</button>
        `;
  tscode = `
    import { Component } from '@angular/core';
      
    @Component({
      selector: 'demo-buttons-size',
      templateUrl: './size.html'
    })
    export class DemoSizeButtonsComponent {
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
