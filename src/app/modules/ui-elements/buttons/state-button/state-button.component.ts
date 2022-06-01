import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.scss']
})
export class StateButtonComponent implements OnInit {

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
    <div class="mb-3">
    <button  class="btn btn-success mr-2" active>Success</button>
    <button  class="btn btn-primary mr-2" active>Primary</button>
    <button  class="btn btn-danger mr-2" active>Danger</button>
    <button  class="btn btn-info mr-2" active>Info</button>
    <button  class="btn btn-warning mr-2" active>Warning</button>
    <button  class="btn btn-dark mr-2" active>Dark</button>
    </div>
  <div class="">
    <button  class="btn btn-success mr-2" disabled>Success</button>
    <button  class="btn btn-primary mr-2" disabled>Primary</button>
    <button  class="btn btn-danger mr-2" disabled>Danger</button>
    <button  class="btn btn-info mr-2" disabled>Info</button>
    <button  class="btn btn-warning mr-2" disabled>Warning</button>
    <button  class="btn btn-dark mr-2" disabled>Dark</button>
    </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-buttons-states',
      templateUrl: './states.html'
    })
    export class DemoSatesButtonsComponent {}
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
