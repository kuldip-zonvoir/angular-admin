import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-item-template-typehed',
  templateUrl: './item-template-typehed.component.html',
  styleUrls: ['./item-template-typehed.component.scss']
})
export class ItemTemplateTypehedComponent implements OnInit {
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
    <input [(ngModel)]="selected"
    [ngModelOptions]="{standalone: true}"
           [typeahead]="states"
           [isAnimated]="true"
           class="form-control">
        `;
  tscode = `
    import { Component } from '@angular/core';
   
    @Component({
      selector: 'demo-typeahead-animated',
      templateUrl: './animated.html'
    })
    export class DemoTypeaheadAnimatedComponent {
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
