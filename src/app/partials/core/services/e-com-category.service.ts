import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { categories } from "../CollectionData/e-commerce-table";

@Injectable({
  providedIn: "root",
})
export class EComCategoryService {
  constructor() {}
  // toggle Add and update Coupon
  private categoryModal = new BehaviorSubject(false);
  categoryModalToggle = this.categoryModal.asObservable();
  toggleCategoryModal(toggler: boolean) {
    this.categoryModal.next(toggler);
  }

  getCategories() {
    return categories;
  }

  findCategories(item: any) {
    categories.filter((categoriesItem) => {});
  }
  addCategory(value) {
    categories.push(value);
  }
  getCategory() {
    return categories;
  }
  deleteCategory(id: string) {
    categories.splice(
      categories.findIndex(function (item) {
        return item.id === id;
      }),
      1
    );
  }
  updatetCategory(id: string) {
    return categories;
  }
}
