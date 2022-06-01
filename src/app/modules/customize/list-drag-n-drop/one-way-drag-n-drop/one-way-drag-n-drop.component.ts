import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-one-way-drag-n-drop',
  templateUrl: './one-way-drag-n-drop.component.html',
  styleUrls: ['./one-way-drag-n-drop.component.scss']
})
export class OneWayDragNDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lists= [
    'Episode 1: Secrets',
    'Episode 2: Lies',
    'Episode 3: Past and Present.',
    'Episode 4: Double Lives',
    'Episode 5: Truths',
    'Episode 6: Sic Mundus Creatus Est.',
    'Episode 7: Between the Time',
    'Episode 8:  As You Sow, so You Shall Reap ',


  ];
  lists1 = [
    'Episode 1: Deja-Vu',
    'Episode 2: The Survivors',
    'Episode 3: Adam and Eva',
    'Episode 4: The Origin',
    'Episode 5: Life and Death',
    'Episode 6: Light and Shadow',
    'Episode 7: Between the Time',
    'Episode 8: The Paradise ',

  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lists1, event.previousIndex, event.currentIndex);
  }
  dropEven(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
  }
}
