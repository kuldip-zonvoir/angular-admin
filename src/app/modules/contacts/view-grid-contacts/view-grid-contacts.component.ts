import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-view-grid-contacts",
  templateUrl: "./view-grid-contacts.component.html",
  styleUrls: ["./view-grid-contacts.component.scss"],
})
export class ViewGridContactsComponent implements OnInit {
  Contacts = [];
  constructor(private _apiService: FakeApiService) {}

  ngOnInit(): void {
    this.Contacts = this._apiService.getContacts();
  }
}
