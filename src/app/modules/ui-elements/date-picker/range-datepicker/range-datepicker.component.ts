import { Component, OnInit } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";

@Component({
  selector: "app-range-datepicker",
  templateUrl: "./range-datepicker.component.html",
  styleUrls: ["./range-datepicker.component.scss"],
})
export class RangeDatepickerComponent implements OnInit {
  tabId = "0";
  showCode = false;
  today: Date;
  constructor() {}

  ngOnInit(): void {}
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
    <div class="row">
    <div class="col-xs-12 col-12 col-md-4 form-group">
    <p-calendar
    class="prime_datepicker"
    [(ngModel)]="today"
    [disabledDays]="[0, 6]"
    [readonlyInput]="true"
    selectionMode="range"
    inputId="range"
    placeholder="Date Picker"
  ></p-calendar>
    </div>
    </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-datepicker-animated',
      templateUrl: './animated.html'
    })
    export class DemoDatePickerAnimatedComponent {}
        `;

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: "{...}",
      top: "{...}",
      value: "{...}",
    };
  }
}
