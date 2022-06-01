import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dynamic-progressbar',
  templateUrl: './dynamic-progressbar.component.html',
  styles: [
  ]
})
export class DynamicProgressbarComponent implements OnInit {

  tabId = "0";
  showCode = false;

  max: number = 200;
  showWarning: boolean;
  dynamic: number;
  type: string;

  constructor() {
    this.random();
  }
  random(): void {
    let value = Math.floor(Math.random() * 100 + 1);
    let type: string;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    this.dynamic = value;
    this.type = type;
  }
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
    <progressbar [max]="max" [value]="dynamic">
      <span class="text-nowrap">{{dynamic}} / {{max}}</span>
    </progressbar>
    <small><em>No animation</em></small>
  </div>
  <div class="mb-3">
    <progressbar [animate]="false" [value]="dynamic" type="success"><b>{{dynamic}}%</b></progressbar>
    <small><em>Object (changes type based on value)</em></small>
  </div>
  <div class="mb-3">
    <progressbar class="progress-striped active" [value]="dynamic" [type]="type">{{type}}</progressbar>
  </div>
  <button type="button" class="btn btn-sm btn-primary" (click)="random()">Randomize</button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-progressbar-dynamic',
      templateUrl: './dynamic.html'
    })
    export class DemoProgressbarDynamicComponent {
      max: number = 200;
      showWarning: boolean;
      dynamic: number;
      type: string;
    
      constructor() {
        this.random();
      }
    
      random(): void {
        let value = Math.floor(Math.random() * 100 + 1);
        let type: string;
    
        if (value < 25) {
          type = 'success';
        } else if (value < 50) {
          type = 'info';
        } else if (value < 75) {
          type = 'warning';
        } else {
          type = 'danger';
        }
    
        this.dynamic = value;
        this.type = type;
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
