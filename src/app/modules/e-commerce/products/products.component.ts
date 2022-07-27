import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FakeApiService } from "src/app/partials/core/fake_api.service";
import { EComProductsService } from "src/app/partials/core/services/e-com-products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productItems = [];
  constructor(
    private _productService: EComProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.productItems = this._productService.getProducts();
  }

  addProduct() {
    this._router.navigate(["/e-commerce/edit-product"]);
  }
}
