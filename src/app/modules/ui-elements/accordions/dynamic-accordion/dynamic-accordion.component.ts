import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dynamic-accordion',
  templateUrl: './dynamic-accordion.component.html',
  styleUrls: ['./dynamic-accordion.component.scss']
})
export class DynamicAccordionComponent implements OnInit {

  tabId = "0";
  codeId = "0";
  showCode = false;
  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  addGroupItem(): void {
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`
    });
  }
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
    <p>
    <button type="button" class="btn btn-primary btn-sm" (click)="addGroupItem()">
      Add Group Item
    </button>
  </p>
  
  <accordion>
    <accordion-group *ngFor="let group of groups" [heading]="group.title">
      {{ group?.content }}
    </accordion-group>
  </accordion>   
        `;
  tscode = `
    import { Component } from '@angular/core';
  
  @Component({
    selector: 'demo-accordion-dynamic',
    templateUrl: './dynamic.html'
  })
  export class DemoAccordionDynamicComponent {
    groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
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
