import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {

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
    <carousel>
    <slide>
      <div class="text-center py-5 bg-dark text-white">
        <h2>First custom content</h2>
        <div class="lead">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </slide>
    <slide>
      <div class="text-center py-5 bg-dark text-white">
        <h2>Second custom content</h2>
        <div class="lead">
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </slide>
    <slide>
      <div class="text-center py-5 bg-dark text-white">
        <h2>Third custom content</h2>
        <div class="lead">
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum. </p>
        </div>
      </div>
    </slide>
  </carousel>             
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-carousel-custom-content',
    templateUrl: './custom-content.html'
  })
  export class DemoCarouselCustomContentComponent {}
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
