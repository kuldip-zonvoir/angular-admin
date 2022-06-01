import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-e-com-cart-product",
  templateUrl: "./e-com-cart-product.component.html",
  styleUrls: ["./e-com-cart-product.component.scss"],
})
export class EComCartProductComponent implements OnInit {
  countInitial = 1;
  isWhished: boolean;
  isCoupon: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  useCoupon() {
    this.isCoupon = !this.isCoupon;
  }
  deleteTask() {}
  increaseCount() {
    if (this.countInitial <= 4) {
      this.countInitial++;
    } else {
      alert("You Can Buy Only 5 Elements");
    }
  }
  decreaseCount() {
    if (this.countInitial > 1) {
      this.countInitial--;
    } else if (this.countInitial <= 1) {
      alert("Minimum 1 Item is required");
    }
  }
  // remove Item from card
  removeProduct() {}
  // add to wish list
  addtoWishlist() {
    this.isWhished = !this.isWhished;
  }
  placeOrder() {
    this.router.navigate(["e-commmerce/checkout"]);
  }
}
