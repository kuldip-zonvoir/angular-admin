import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-caption-carousel',
  templateUrl: './caption-carousel.component.html',
  styleUrls: ['./caption-carousel.component.scss']
})
export class CaptionCarouselComponent implements OnInit {
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
    <carousel [pauseOnFocus]="true">
    <slide>
    <img src="assets/media/images/slide/1.jpg" alt="first slide" style="display: block; width: 100%;">
    <div class="carousel-caption d-none d-md-block">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </slide>
  <slide>
    <img src="assets/media/images/slide/2.jpg" alt="second slide" style="display: block; width: 100%;">
    <div class="carousel-caption d-none d-md-block">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </slide>
  <slide>
    <img src="assets/media/images/slide/3.jpg" alt="third slide" style="display: block; width: 100%;">
    <div class="carousel-caption d-none d-md-block">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </div>
  </slide>
  </carousel>                            
        `;
  tscode = `
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'demo-carousel-pause-on-hover',
      templateUrl: './pause-on-hover.html'
    })
    export class DemoCarouselPauseOnHoverComponent {}
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
