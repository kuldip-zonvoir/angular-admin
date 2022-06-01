import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-inline-collapse',
  templateUrl: './inline-collapse.component.html',
  styleUrls: ['./inline-collapse.component.scss']
})
export class InlineCollapseComponent implements OnInit {
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
    <button type="button" class="btn btn-success" (click)="collapse.display='inline-block'"
    aria-controls="collapseBasic">Inline-block
  </button>
  <button type="button" class="btn btn-primary" (click)="collapse.display='none'"
    aria-controls="collapseBasic">None
  </button>
  <hr>
  <div id="collapseBasic" [collapse]="!isCollapsed" #collapse="bs-collapse">
  <div class="well well-lg card card-block card-header">Some content</div>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
   
  @Component({
    selector: 'inline-display-demo',
    templateUrl: './inline-display.html'
  })
  export class InlineDisplayDemoComponent {
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
