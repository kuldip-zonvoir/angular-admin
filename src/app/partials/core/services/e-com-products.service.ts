import { Injectable } from "@angular/core";
import { products } from "../CollectionData/e-commerce-table";

@Injectable({
  providedIn: "root",
})
export class EComProductsService {
  constructor() {}
  getProducts() {
    return products;
  }

  addProduct(value) {
    products.push(value);
  }
  deleteProduct(id: string) {
    products.splice(
      products.findIndex(function (item) {
        return item.id === id;
      }),
      1
    );
  }
}
