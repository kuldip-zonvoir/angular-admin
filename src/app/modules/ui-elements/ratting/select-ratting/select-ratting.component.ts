import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-select-ratting',
  templateUrl: './select-ratting.component.html',
  styleUrls: ['./select-ratting.component.scss']
})
export class SelectRattingComponent implements OnInit {
  tabId = "0";
  showCode = false;
  max = 10;
  rate = 7;
  isReadonly = false;
  constructor() { }

  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
  response: HighlightResult;

  htmlcode = `
    <rating [(ngModel)]="rate" [ngModelOptions]="{standalone: true}" [max]="max" [readonly]="isReadonly"
    (keyup)="confirmSelection($event)"></rating>
  <div class="card">
  <pre class="card-block card-header" style="margin:15px 0;">Rating: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;</pre>
  </div>
  <button class="btn btn-primary" (click)="resetStars()">Reset rating and status</button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-select-on-enter',
      templateUrl: './select-on-enter.html'
    })
    export class DemoRatingSelectOnEnterComponent {
      max = 10;
      rate = 7;
      isReadonly = false;
    
      confirmSelection(event: KeyboardEvent) {
        if (event.keyCode === 13 || event.key === 'Enter') {
          this.isReadonly = true;
        }
      }
    
      resetStars() {
        this.rate = 0;
        this.isReadonly = false;
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
