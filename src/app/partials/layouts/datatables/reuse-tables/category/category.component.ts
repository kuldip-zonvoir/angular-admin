import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FakeApiService } from "src/app/partials/core/fake_api.service";
import { EComCategoryService } from "src/app/partials/core/services/e-com-category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit,OnDestroy {
  termsPara = [
    {
      id: "0",
      para_name: "All Category",
    },
    {
      id: "1",
      para_name: "Fashion",
    },
    {
      id: "2",
      para_name: "Grocery",
    },
  ];
  showBoundaryLinks = true;
  categoryDetail: boolean;
  categoryList = [];
    subscription: Subscription;

  constructor(private _categoryService: EComCategoryService) {}

  ngOnInit(): void {
    this.categoryList = this._categoryService.getCategories();
    this.subscription = this._categoryService.categoryModalToggle.subscribe((item) => {
      this.categoryDetail = item;
    });
  }

  editCategory(id: string) {
    this.categoryDetail = true;
  }
  closeModal() {
    this.categoryDetail = false;
  }
  deleteCategory(id: string) { }
  

  updateCategory() {
    
    
  }
    ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
