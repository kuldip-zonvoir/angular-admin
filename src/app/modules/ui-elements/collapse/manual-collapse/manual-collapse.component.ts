import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-manual-collapse',
  templateUrl: './manual-collapse.component.html',
  styleUrls: ['./manual-collapse.component.scss']
})
export class ManualCollapseComponent implements OnInit {

  tabId = "0";
  showCode = false;
  isCollapsed = false;
  isOpen = false;
  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
    <button type="button" class="btn btn-primary" (click)="collapse.show()"
    aria-controls="collapseManual">Show content
  </button>
  <button type="button" class="btn btn-primary" (click)="collapse.hide()"
    aria-controls="collapseManual">Hide content
  </button>
  <hr>
  <div id="collapseManual" #collapse="bs-collapse" [collapse]="isOpen">
  <div class="well well-lg card card-block card-header">Some content</div>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
   
    @Component({
      selector: 'toggle-manual-demo',
      templateUrl: './toggle-manual.html'
    })
    export class ToggleManualDemoComponent {
      isOpen = false;
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
