import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-e-com-inventory-list",
  templateUrl: "./e-com-inventory-list.component.html",
  styleUrls: ["./e-com-inventory-list.component.scss"],
})
export class EComInventoryListComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  addProduct() {
    this._router.navigate(["/e-commmerce/edit-product"]);
  }
}
