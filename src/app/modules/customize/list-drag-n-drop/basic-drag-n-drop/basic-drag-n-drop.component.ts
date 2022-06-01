import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-basic-drag-n-drop',
  templateUrl: './basic-drag-n-drop.component.html',
  styleUrls: ['./basic-drag-n-drop.component.scss']
})
export class BasicDragNDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  services = [
    'The basics of getting your account set up.',
    'How to create a theme',
    'How to create the perfect front end UI.',
    'Top tips for optimizing Your Code',
    'Configure UI as you required for your enterprise',
    'Install  Zonvoir  UI on the and get the Service',
    'Create configuration level objects your customers.',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.services, event.previousIndex, event.currentIndex);
  }

}
