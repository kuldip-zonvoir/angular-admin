import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabel-filter-component-bottom",
  templateUrl: "./tabel-filter-component-bottom.component.html",
  styleUrls: ["./tabel-filter-component-bottom.component.scss"],
})
export class TabelFilterComponentBottomComponent implements OnInit {
  selectedPara: string;

  constructor() {}
  pages: [10];
  ngOnInit(): void {}
  pagination = [
    {
      id: "0",
      para_name: "1 ",
    },
    {
      id: "1",
      para_name: "2",
    },
    {
      id: "2",
      para_name: "3",
    },
    {
      id: "3",
      para_name: "4",
    },
  ];
  termsPara = [
    {
      id: "0",
      para_name: "10 ",
    },
    {
      id: "1",
      para_name: "15",
    },
    {
      id: "2",
      para_name: "20",
    },
    {
      id: "3",
      para_name: "25",
    },
  ];
}
