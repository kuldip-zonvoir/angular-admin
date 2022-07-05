import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-feature-photos",
  templateUrl: "./feature-photos.component.html",
  styleUrls: ["./feature-photos.component.scss"],
})
export class FeaturePhotosComponent implements OnInit {
  photos = [];
  constructor(private _fakeApi: FakeApiService) {}

  ngOnInit(): void {
    this.photos = this._fakeApi.getUsers().slice(0, 12);
  }
}
