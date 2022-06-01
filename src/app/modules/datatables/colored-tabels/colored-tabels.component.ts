import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colored-tabels',
  templateUrl: './colored-tabels.component.html',
  styleUrls: ['./colored-tabels.component.scss']
})
export class ColoredTabelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  repeatSequence(n: number): Array<number> {
    return Array(n);
  }

}
