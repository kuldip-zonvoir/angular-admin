import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-accordion',
  templateUrl: './basic-accordion.component.html',
  styleUrls: ['./basic-accordion.component.scss']
})
export class BasicAccordionComponent implements OnInit {

  tabId = "0";
  codeId = "0";
  showCode = false;
  constructor() { }
  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  tabCode(tab) {
    if (tab != this.codeId) {
      this.codeId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
  <accordion>
  <accordion-group heading="Static Header">
    This content is straight in the template.
  </accordion-group>
  <accordion-group heading="Another group">
    <p>Some content</p>
  </accordion-group>
  <accordion-group heading="Another group">
    <p>Some content</p>
  </accordion-group>
  <accordion-group heading="Another group">
    <p>Some content</p>
  </accordion-group>
</accordion>    
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-accordion-basic',
    templateUrl: './basic.html'
  })
  export class DemoAccordionBasicComponent {}
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
