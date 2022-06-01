import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.scss"],
})
export class ProductGridComponent implements OnInit {
  @Input("products") product: any;
  isWishlist: boolean;
  constructor(private _rouetr: Router) {}

  ngOnInit(): void {}
  addToCart(id: string) {
    this._rouetr.navigate(["/e-commmerce/cart"]);
  }
  productDetail(id: string) {
    this._rouetr.navigate(["/e-commmerce/product-detail"]);
  }
  addToWishlist(id: string) {
    this.isWishlist = true;
  }
}
