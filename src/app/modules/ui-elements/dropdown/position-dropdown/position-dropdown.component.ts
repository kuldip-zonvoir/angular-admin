import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-position-dropdown',
  templateUrl: './position-dropdown.component.html',
  styleUrls: ['./position-dropdown.component.scss']
})
export class PositionDropdownComponent implements OnInit {

  tabId = "0";
  showCode = false;
  disabled: boolean = false;
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
    <div class="btn-group" dropdown [isDisabled]="disabled">
    <button id="button-disabled-menu" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
            aria-controls="dropdown-disabled-menu">
      Button dropdown <span class="caret"></span>
    </button>
    <ul id="dropdown-disabled-menu" *dropdownMenu class="dropdown-menu"
        role="menu" aria-labelledby="button-disabled-menu">
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
  <button type="button" class="btn btn-warning" (click)="disabled = !disabled">
    Enable/Disable
  </button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-dropdown-disabled',
      templateUrl: './disabled-menu.html'
    })
    export class DemoDropdownDisabledComponent {
      disabled: boolean = false;
    }
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
