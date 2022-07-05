import { Component, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-photo-gallery-profile",
  templateUrl: "./photo-gallery-profile.component.html",
  styleUrls: ["./photo-gallery-profile.component.scss"],
})
export class PhotoGalleryProfileComponent implements OnInit {
  photos = [];
  constructor(private _fakeApi: FakeApiService) {}

  ngOnInit(): void {
    this.photos = this._fakeApi.getPostGallary();
  }
}
