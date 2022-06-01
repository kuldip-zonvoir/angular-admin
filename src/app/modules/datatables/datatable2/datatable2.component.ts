import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datatable2",
  templateUrl: "./datatable2.component.html",
  styleUrls: ["./datatable2.component.scss"],
})
export class Datatable2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  termsPara = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "In Progress",
    },
    {
      id: "2",
      para_name: "Canceled",
    },
    {
      id: "3",
      para_name: "Completed",
    },
  ];
  termsPara2 = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Today",
    },
    {
      id: "2",
      para_name: "Last Day",
    },
    {
      id: "3",
      para_name: "Last Week",
    },
    {
      id: "4",
      para_name: "Last Month",
    },
  ];
}
