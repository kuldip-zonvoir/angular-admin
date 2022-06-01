import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { coupons } from "../CollectionData/e-commerce-table";

@Injectable({
  providedIn: "root",
})
export class EComCouponService {
  constructor() {}
  // toggle Add and update Coupon
  private couponModal = new BehaviorSubject(false);
  couponModalToggle = this.couponModal.asObservable();
  togglecouponModal(toggler: boolean) {
    this.couponModal.next(toggler);
  }

  getCoupons() {
    return coupons;
  }

  findCoupons(item: any) {
    coupons.filter((couponsItem) => {});
  }
  addCoupon(value) {
    coupons.push(value);
  }
  getCoupon() {
    return coupons;
  }
  deleteCoupon(id: string) {
    coupons.splice(
      coupons.findIndex(function (item) {
        return item.id === id;
      }),
      1
    );
  }
  updatetCoupon(id: string) {
    return coupons;
  }
}
