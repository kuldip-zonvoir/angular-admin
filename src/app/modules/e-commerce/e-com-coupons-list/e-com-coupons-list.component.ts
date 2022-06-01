import { Component, OnInit } from "@angular/core";
import { EComCouponService } from "src/app/partials/core/services/e-com-coupon.service";

@Component({
  selector: "app-e-com-coupons-list",
  templateUrl: "./e-com-coupons-list.component.html",
  styleUrls: ["./e-com-coupons-list.component.scss"],
})
export class EComCouponsListComponent implements OnInit {
  customCoupon: boolean;

  constructor(private _couponService: EComCouponService) {}

  ngOnInit(): void {}
  addCoupon() {
    this.customCoupon = true;
    this._couponService.togglecouponModal(this.customCoupon);
  }
}
