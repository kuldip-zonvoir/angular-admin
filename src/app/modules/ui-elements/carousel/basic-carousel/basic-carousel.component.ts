import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-carousel',
  templateUrl: './basic-carousel.component.html',
  styleUrls: ['./basic-carousel.component.scss']
})
export class BasicCarouselComponent implements OnInit {
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
      <img src="assets/images/nature/1.jpg" alt="first slide" style="display: block; width: 100%;">
    </slide>
    <slide>
      <img src="assets/images/nature/2.jpg" alt="second slide" style="display: block; width: 100%;">
    </slide>
    <slide>
      <img src="assets/images/nature/3.jpg" alt="third slide" style="display: block; width: 100%;">
    </slide>
  </carousel>             
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-carousel-basic',
      templateUrl: './basic.html'
    })
    export class DemoCarouseBasicComponent {}
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
