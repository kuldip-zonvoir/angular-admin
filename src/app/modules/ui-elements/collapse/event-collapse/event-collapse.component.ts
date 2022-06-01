import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-event-collapse',
  templateUrl: './event-collapse.component.html',
  styleUrls: ['./event-collapse.component.scss']
})
export class EventCollapseComponent implements OnInit {
  tabId = "0";
  showCode = false;
  isCollapsed = false;
  message: string = 'expanded';

  collapsed(): void {
    this.message = 'collapsed';
  }

  collapses(): void {
    this.message = 'collapses';
  }

  expanded(): void {
    this.message = 'expanded';
  }

  expands(): void {
    this.message = 'expands';
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
    <div class="row">
    <div class="col-md-3">
      <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed"
              [attr.aria-expanded]="!isCollapsed" aria-controls="collapseEvent">Toggle collapse
      </button>
    </div>
    <div class="col-md-9">
      <pre class="card card-block card-header">Event: {{message}}</pre>
    </div>
  </div>
  <hr>
  <div id="collapseEvent"
       [isAnimated]="true"
       [collapse]="isCollapsed"
       (collapses)="collapses()"
       (expands)="expands()"
       (collapsed)="collapsed()"
       (expanded)="expanded()">
   
    <div class="well well-lg card card-block card-header">Some content</div>
  </div>
        `;
  tscode = `
    import { Component } from '@angular/core';
   
    @Component({
      selector: 'collapse-demo-events',
      templateUrl: './events.html'
    })
    export class CollapseDemoEventsComponent {
      isCollapsed = false;
      message: string = 'expanded';
     
      collapsed(): void {
        this.message = 'collapsed';
      }
     
      collapses(): void {
        this.message = 'collapses';
      }
     
      expanded(): void {
        this.message = 'expanded';
      }
     
      expands(): void {
        this.message = 'expands';
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
