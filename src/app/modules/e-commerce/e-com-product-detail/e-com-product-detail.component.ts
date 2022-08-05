import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { count } from "rxjs/operators";
import { FakeApiService } from "src/app/partials/core/fake_api.service";
import { EComProductsService } from "src/app/partials/core/services/e-com-products.service";

@Component({
  selector: "app-e-com-product-detail",
  templateUrl: "./e-com-product-detail.component.html",
  styleUrls: ["./e-com-product-detail.component.scss"],
})
export class EComProductDetailComponent implements OnInit {
  productItems = [];
  productList = [];
  tabId = "Review";
  countInitial = 1;
  show: boolean = false;
  isOffers: boolean = false;

  constructor(
    private _productService: EComProductsService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.productItems = this._productService.getProducts();
    this.productList = this.productItems.slice(0, 4);
  }
  // To change Tabs
  changeTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }

  // Incease the Product quantity
  increaseCount() {
    if (this.countInitial <= 4) {
      this.countInitial++;
    } else {
      alert("You Can Buy Only 5 Elements");
    }
  }

  // Decrease the product quantity
  decreaseCount() {
    if (this.countInitial > 1) {
      this.countInitial--;
    } else if (this.countInitial <= 1) {
      alert("Minimum 1 Item is required");
    }
  }

  // check Product awailability
  checkAwailabilty() {
    this.show = !this.show;
  }

  // check Product awailability
  showOffers() {
    this.isOffers = !this.isOffers;
  }

  // buy product
  buyProduct() {
    this.route.navigate(["e-commerce/cart"]);
  }
}
