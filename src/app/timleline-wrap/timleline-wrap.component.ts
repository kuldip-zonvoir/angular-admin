import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timleline-wrap',
  templateUrl: './timleline-wrap.component.html',
  styleUrls: ['./timleline-wrap.component.scss']
})
export class TimlelineWrapComponent implements OnInit {
  events1: any[];
  events2: any[];

  constructor() { }

  ngOnInit(): void {
    this.events2 = ["2020", "2021", "2022", "2023"];
    this.events1 = [
      {
        status: "Ordered",
        date: "15/10/2020 10:30",

        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        color: "#673AB7"
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        color: "#FF9800"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",

        color: "#607D8B"
      }
    ];
  }

}
