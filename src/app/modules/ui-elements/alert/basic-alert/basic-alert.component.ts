import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-alert',
  templateUrl: './basic-alert.component.html',
  styleUrls: ['./basic-alert.component.scss']
})
export class BasicAlertComponent implements OnInit {
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
    <strong>Well done!</strong> You successfully read this important alert message.
  </alert>
  <alert type="info">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </alert>
  <alert type="warning">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </alert>
  <alert type="danger">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </alert>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-alert-basic',
      templateUrl: './basic.html'
    })
    export class DemoAlertBasicComponent {}
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
