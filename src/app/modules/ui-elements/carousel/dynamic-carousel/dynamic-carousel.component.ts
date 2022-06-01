import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-dynamic-carousel',
  templateUrl: './dynamic-carousel.component.html',
  styleUrls: ['./dynamic-carousel.component.scss']
})
export class DynamicCarouselComponent implements OnInit {
  tabId = "0";
  showCode = false;
  slides: { image: string }[] = [];
  activeSlideIndex = 0;
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  addSlide(): void {
    this.slides.push({
      image: `assets/media/images/slide/${this.slides.length % 8 + 1}.jpg`
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
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
    <carousel [(activeSlide)]="activeSlideIndex" >
    <slide *ngFor="let slide of slides; let index=index">
      <img [src]="slide.image" alt="image slide" style="display: block; width: 100%;">
  
      <div class="carousel-caption">
        <h4>Slide {{index}}</h4>
        <p>{{slide.text}}</p>
      </div>
    </slide>
  </carousel>
  <br/>
  <div>
    <button type="button" class="btn btn-info"
            (click)="addSlide()">Add Slide
    </button>
    <button type="button" class="btn btn-info"
            (click)="removeSlide()">Remove Current
    </button>
    <button type="button" class="btn btn-info"
            (click)="removeSlide(2)">Remove #3
    </button>
  </div             
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-carousel-dynamic',
    templateUrl: './dynamic.html'
  })
  export class DemoCarouselDynamicComponent {
    slides: { image: string }[] = [];
    activeSlideIndex = 0;
   
    constructor() {
      for (let i = 0; i < 4; i++) {
        this.addSlide();
      }
    }
   
    addSlide(): void {
      this.slides.push({
        image: assets/images/nature/"${this.slides.length % 8 + 1}".jpg
      });
    }
   
    removeSlide(index?: number): void {
      const toRemove = index ? index : this.activeSlideIndex;
      this.slides.splice(toRemove, 1);
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
