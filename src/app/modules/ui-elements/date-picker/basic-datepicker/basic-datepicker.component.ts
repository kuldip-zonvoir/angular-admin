import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-datepicker',
  templateUrl: './basic-datepicker.component.html',
  styleUrls: ['./basic-datepicker.component.scss']
})
export class BasicDatepickerComponent implements OnInit {
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
    <div class="row">
    <div class="col-xs-12 col-12 col-md-4 form-group">
      <input type="text"
            placeholder="Datepicker"
            class="form-control"
            bsDatepicker
            [bsConfig]="{ isAnimated: true }">
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
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }
}
