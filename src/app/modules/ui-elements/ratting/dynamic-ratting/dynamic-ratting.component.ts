import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dynamic-ratting',
  templateUrl: './dynamic-ratting.component.html',
  styleUrls: ['./dynamic-ratting.component.scss']
})
export class DynamicRattingComponent implements OnInit {
  tabId = "0";
  showCode = false;
  max = 10;
  rate = 7;
  isReadonly = false;

  overStar: number | undefined;
  percent: number;
  constructor() { }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
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
      <rating [(ngModel)]="rate" [ngModelOptions]="{standalone: true}" [max]="max" [readonly]="isReadonly"
      (onHover)="hoveringOver($event)" (onLeave)="resetStar()"
      [titles]="['one','two','three']"></rating>
    <span class="label"
    [ngClass]="{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}"
    [ngStyle]="{display: (overStar && !isReadonly) ? 'inline' : 'none'}">{{percent}}%</span>
    <div class="card">
    <pre class="card-block card-header" style="margin:15px 0;">Rate: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;  Hovering over: <b>{{overStar || "none"}}</b></pre>
    </div>

    <button type="button" class="btn btn-sm btn-danger" (click)="rate = 0"
      [disabled]="isReadonly">Clear
    </button>
    <button type="button" class="btn btn-sm btn-primary"
      (click)="isReadonly = ! isReadonly">Toggle Readonly
    </button>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-rating-dynamic',
      templateUrl: './dynamic.html'
    })
    export class DemoRatingDynamicComponent {
      max = 10;
      rate = 7;
      isReadonly = false;
    
      overStar: number | undefined;
      percent: number;
    
      hoveringOver(value: number): void {
        this.overStar = value;
        this.percent = (value / this.max) * 100;
      }
    
      resetStar(): void {
        this.overStar = void 0;
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
