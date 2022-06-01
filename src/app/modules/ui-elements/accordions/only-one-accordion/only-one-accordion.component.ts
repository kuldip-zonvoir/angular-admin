import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-only-one-accordion',
  templateUrl: './only-one-accordion.component.html',
  styleUrls: ['./only-one-accordion.component.scss']
})
export class OnlyOneAccordionComponent implements OnInit {

  tabId = "0";
  showCode = false;
  oneAtATime: boolean = true;
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
    <div class="checkbox">
    <label>
      <input type="checkbox" [(ngModel)]="oneAtATime">
      Open only one at a time
    </label>
  </div>
  
  <accordion [closeOthers]="oneAtATime">
    <accordion-group heading="Header">
      This content is straight in the template.
    </accordion-group>
    <accordion-group heading="Content 1">
      <p>Content 1</p>
    </accordion-group>
    <accordion-group heading="Content 2">
      <p>Content 2</p>
    </accordion-group>
  </accordion>   
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-accordion-one-time',
    templateUrl: './one-at-a-time.html'
  })
  export class DemoAccordionOneAtATimeComponent {
    oneAtATime: boolean = true;
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
