import { Component, OnInit } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Observable } from "rxjs";
import {
  Person,
  SelectDataService,
} from "src/app/partials/core/selectdata.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-advance-form",
  templateUrl: "./advance-form.component.html",
  styleUrls: ["./advance-form.component.scss"],
})
export class AdvanceFormComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  cities: [] = [];
  selectedItem: [] = [];
  closeDropdownSelection = false;
  disabled = false;
  people: Person[] = [];
  selectedPeople = [];
  people$: Observable<Person[]>;
  selectedPersonId = "5a15b13c36e7a7f00cf0d7cb";

  toggleCloseDropdownSelection() {
    this.closeDropdownSelection = !this.closeDropdownSelection;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      closeDropDownOnSelection: this.closeDropdownSelection,
    });
  }
  constructor(private dataService: SelectDataService) {}
  ngOnInit() {
    this.dataService
      .getPeople()
      .pipe(map((x) => x.filter((y) => !y.disabled)))
      .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id, this.people[1].id];
      });
    this.people$ = this.dataService.getPeople();
    this.dropdownList = [
      { item_id: 1, item_text: "Mumbai" },
      { item_id: 2, item_text: "Bangaluru" },
      { item_id: 3, item_text: "Pune" },
      { item_id: 4, item_text: "Navsari" },
      { item_id: 5, item_text: "New Delhi" },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: "Pune" },
      { item_id: 4, item_text: "Navsari" },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
