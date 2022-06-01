import { Injectable } from "@angular/core";
import { orders } from "../CollectionData/e-commerce-table";

@Injectable({
  providedIn: "root",
})
export class EComOrderService {
  constructor() {}
  getOrders() {
    return orders;
  }
}
