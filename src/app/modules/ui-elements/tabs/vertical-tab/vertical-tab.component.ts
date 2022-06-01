import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.scss']
})
export class VerticalTabComponent implements OnInit {

  tabId = "0";
  codeId = "0";
  showCode = false;
  constructor() { }
  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  tabCode(tab) {
    if (tab != this.codeId) {
      this.codeId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
     <div class="nav_bar w-100 mb-2">
     <ul>
     <li class="w-100 border-1"><a [ngClass] ="{'active': tabId === '0'}" (click) = "tabToggle('0')">
         Tab 1
         </a>
         </li>
     <li class="w-100"><a [ngClass] ="{'active': tabId === '1'}"  (click) = "tabToggle('1')">
             Tab 2
         </a>
     </li>
     <li class="w-100"><a [ngClass] ="{'active': tabId === '2'}" (click) = "tabToggle('2')" >
         Tab 3
     </a>
  </li>
  </ul>
  </div> 
  <ng-template [ngIf] = "tabId === '0'" >
  <p> content 1</p>
 </ng-template>
 <ng-template [ngIf] = "tabId === '1'" >
  <p> content 2</p>
 </ng-template>
 <ng-template [ngIf] = "tabId === '2'" >
  <p> content 3</p>
 </ng-template>     
        `;
  tscode = `
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-horizontal-full-tabs',
    templateUrl: './horizontal-full-tabs.component.html',
    styleUrls: ['./horizontal-full-tabs.component.scss']
  })
  export class HorizontalFullTabsComponent implements OnInit {
  
    tabId = "0";
    codeId = "0";
    showCode = false;
    constructor() { }
    ngOnInit(): void {
    }
    tabToggle(tab) {
      if (tab != this.tabId) {
        this.tabId = tab;
      }
    }
    tabCode(tab) {
      if (tab != this.codeId) {
        this.codeId = tab;
      }
    }
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
