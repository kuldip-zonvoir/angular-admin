import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-all-friends",
  templateUrl: "./all-friends.component.html",
  styleUrls: ["./all-friends.component.scss"],
})
export class AllFriendsComponent implements OnInit {
  friends = [];

  constructor(private _apiService: FakeApiService) {}

  ngOnInit(): void {
    this.friends = this._apiService.getContacts();
  }
}
