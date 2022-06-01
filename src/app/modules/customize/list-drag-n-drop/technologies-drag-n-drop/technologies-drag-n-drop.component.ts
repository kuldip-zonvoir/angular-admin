import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-technologies-drag-n-drop',
  templateUrl: './technologies-drag-n-drop.component.html',
  styleUrls: ['./technologies-drag-n-drop.component.scss']
})
export class TechnologiesDragNDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  laguages = [
    'Angular',
    'React',
    'vue',
    'Bootstrap',
    'PHP',
    'Sass',
    'Jquery',
    'Wordpress',
    'Laravel',
    'Java',
    'JavaScript',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.laguages, event.previousIndex, event.currentIndex);
  }

}
