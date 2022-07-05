import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { EComCouponService } from "src/app/partials/core/services/e-com-coupon.service";

@Component({
  selector: "app-coupons",
  templateUrl: "./coupons.component.html",
  styleUrls: ["./coupons.component.scss"],
})
export class CouponsComponent implements OnInit, OnDestroy {
  taskDialog: boolean;
  showBoundaryLinks = true;
  addTask: boolean;
  isActive: boolean;
  popupId: string;
  confirmDialog: boolean;
  couponDetail: boolean;

  subscription: Subscription;
  statusArr = [];
  selectedStatus: string;
  couponList = [];
  constructor(private _couponService: EComCouponService) {
    this.statusArr = [
      {
        value: "0",
        label: "Active",
      },
      {
        value: "1",
        label: "In active",
      },
    ];
  }

  ngOnInit(): void {
    this.subscription = this._couponService.couponModalToggle.subscribe(
      (item) => {
        this.couponDetail = item;
      }
    );
    this.couponList = this._couponService.getCoupons();
  }
  showTask() {
    this.taskDialog = true;
  }
  addTasks() {
    this.addTask = true;
  }
  // colse Coupon modal
  closeModal() {
    this.couponDetail = false;
  }
  selectDate() {}
  deleteCoupon(id: string) {
    this.confirmDialog = true;
    this.popupId = id;
  }
  confirmDelete(id) {
    this.confirmDialog = false;
    this._couponService.deleteCoupon(id);
  }
  cancelDelete() {
    this.confirmDialog = false;
  }
  editCoupon(id: string) {
    this.couponDetail = true;
  }
  updateCoupon() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  termsPara = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Active",
    },
    {
      id: "2",
      para_name: "Inactive",
    },
  ];
  termsPara3 = [
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
