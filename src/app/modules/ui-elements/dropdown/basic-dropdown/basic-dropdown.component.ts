import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrls: ['./basic-dropdown.component.scss']
})
export class BasicDropdownComponent implements OnInit {

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
    <button id="button-basic" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
            aria-controls="dropdown-basic">
      Button dropdown <span class="caret"></span>
    </button>
    <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu"
        role="menu" aria-labelledby="button-basic">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
      </li>
    </ul>
    </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-dropdown-basic',
      templateUrl: './basic.html'
    })
    export class DemoDropdownBasicComponent {}
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
