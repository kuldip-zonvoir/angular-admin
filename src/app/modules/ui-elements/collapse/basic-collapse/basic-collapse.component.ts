import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-collapse',
  templateUrl: './basic-collapse.component.html',
  styleUrls: ['./basic-collapse.component.scss']
})
export class BasicCollapseComponent implements OnInit {
  tabId = "0";
  showCode = false;
  isCollapsed = false;
  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
    <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"
    [attr.aria-expanded]="!isCollapsed" aria-controls="collapseBasic">Toggle collapse
  </button>
  <hr>
  <div id="collapseBasic" [collapse]="isCollapsed">
  <div class="well well-lg card card-block card-header">Some content</div>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
   
    @Component({
      selector: 'collapse-demo',
      templateUrl: './basic.html'
    })
    export class CollapseDemoComponent {
      isCollapsed = false;
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
