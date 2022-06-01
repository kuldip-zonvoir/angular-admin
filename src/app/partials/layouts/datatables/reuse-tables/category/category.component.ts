import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";
import { EComCategoryService } from "src/app/partials/core/services/e-com-category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  showBoundaryLinks = true;
  categoryDetail: boolean;
  categoryList = [];
  constructor(private _categoryService: EComCategoryService) {}

  ngOnInit(): void {
    this.categoryList = this._categoryService.getCategories();
    this._categoryService.categoryModalToggle.subscribe((item) => {
      this.categoryDetail = item;
    });
  }

  editCategory(id: string) {
    this.categoryDetail = true;
  }
  closeModal() {
    this.categoryDetail = false;
  }
  deleteCategory(id: string) {}
  updateCategory() {}
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
}
