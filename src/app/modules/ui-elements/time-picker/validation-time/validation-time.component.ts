import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-validation-time',
  templateUrl: './validation-time.component.html',
  styleUrls: ['./validation-time.component.scss']
})
export class ValidationTimeComponent implements OnInit {
  tabId = "0";
  showCode = false;
  isMeridian = true;
  myTime = new Date();
  valid = true;
  mytime: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }
  isValid(event: boolean): void {
    this.valid = event;
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
  <timepicker [ngModelOptions]="{standalone: true}" [(ngModel)]="myTime" [showMeridian]="isMeridian" (isValid)="isValid($event)"></timepicker>
  <hr>
  <pre class="alert"
       [class.alert-danger]="!valid"
       [class.alert-success]="valid">
    Time is: {{myTime}}
  </pre>
  <div *ngIf="!valid" class="alert alert-danger">Invalid time</div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-timepicker-isvalid',
      templateUrl: './isvalid.html'
    })
    export class DemoTimepickerIsValidComponent {
      isMeridian = true;
      myTime = new Date();
      valid = true;
    
      isValid(event: boolean): void {
        this.valid = event;
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
