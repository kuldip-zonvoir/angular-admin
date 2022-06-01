import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabel-filter-component",
  templateUrl: "./tabel-filter-component.component.html",
  styleUrls: ["./tabel-filter-component.component.scss"],
})
export class TabelFilterComponentComponent implements OnInit {
  constructor() {}
  selectedPara = "0";
  ngOnInit(): void {}
}
