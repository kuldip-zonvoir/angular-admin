import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dateformat-datepicker',
  templateUrl: './dateformat-datepicker.component.html',
  styleUrls: ['./dateformat-datepicker.component.scss']
})
export class DateformatDatepickerComponent implements OnInit {
  tabId = "0";
  showCode = false;
  currentDate = new Date();

  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
    ])
  });
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
    <input
    class="form-control"
    #datepickerYMD="bsDatepicker"
    bsDatepicker
    formControlName="dateYMD"
    [bsConfig]="{ dateInputFormat: 'YYYY-MM-DD' }">
    </div>
   </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
    import { FormControl, FormGroup } from '@angular/forms';
    
    @Component({
      selector: 'demo-date-picker-custom-format',
      templateUrl: './custom-format.html'
    })
    export class DemoDatePickerCustomFormatComponent {
      currentDate = new Date();
    
      form = new FormGroup({
        dateYMD: new FormControl(new Date()),
        dateFull: new FormControl(new Date()),
        dateMDY: new FormControl(new Date()),
        dateRange: new FormControl([
          new Date(),
          new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
        ])
      });
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
