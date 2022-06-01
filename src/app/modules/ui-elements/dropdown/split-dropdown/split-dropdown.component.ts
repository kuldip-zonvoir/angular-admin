import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-split-dropdown',
  templateUrl: './split-dropdown.component.html',
  styleUrls: ['./split-dropdown.component.scss']
})
export class SplitDropdownComponent implements OnInit {

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
    <div class="btn-group" dropdown>
    <button type="button" class="btn btn-primary">Action</button>
    <button id="button-split" type="button" dropdownToggle class="btn btn-primary dropdown-toggle dropdown-toggle-split"
            aria-controls="dropdown-split">
      <span class="caret"></span>
      <span class="sr-only">Split button!</span>
    </button>
    <ul id="dropdown-split" *dropdownMenu class="dropdown-menu"
        role="menu" aria-labelledby="button-split">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a>
      </li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else
        here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
      </li>
    </ul>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-dropdown-split',
      templateUrl: './split.html'
    })
    export class DemoDropdownSplitComponent {}
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
