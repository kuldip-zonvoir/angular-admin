import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-position-typehed',
  templateUrl: './position-typehed.component.html',
  styleUrls: ['./position-typehed.component.scss']
})
export class PositionTypehedComponent implements OnInit {
  tabId = "0";
  showCode = false;
  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',

  ];
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
  <pre class="card card-block card-header mb-3">Model: {{selected | json}}</pre>
  <input [ngModelOptions]="{standalone: true}" [(ngModel)]="selected"[typeahead]="states"[adaptivePosition]="true"class="form-control">
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-typeahead-adaptive-position',
    templateUrl: './adaptive-position.html'
  })
  export class DemoTypeaheadAdaptivePositionComponent {
    selected: string;
    states: string[] = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',

    ];
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
