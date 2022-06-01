import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-height-progressbar',
  templateUrl: './height-progressbar.component.html',
  styles: [
  ]
})
export class HeightProgressbarComponent implements OnInit {
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
    <div class="mb-4">
       <progressbar [value]="55" style="height: 5px;" ></progressbar>
    </div>
    <div class="mb-4">
        <progressbar [value]="75" style="height: 10px;" ></progressbar>
  </div>
  <div class="mb-2">
    <progressbar [value]="90"   type="success" >22%</progressbar>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-progressbar-static',
      templateUrl: './static.html'
    })
    export class DemoProgressbarHeightComponent {}
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
