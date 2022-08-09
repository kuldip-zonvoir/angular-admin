import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  GoogleMap,
  MapInfoWindow,
  MapMarker,
  MapTrafficLayer,
} from "@angular/google-maps";
import { environment } from "../../../../environments/environment";
@Component({
  selector: "app-map1",
  templateUrl: "./map1.component.html",
  styleUrls: ["./map1.component.scss"],
})
export class Map1Component implements OnInit {
  apiLoaded: Observable<boolean>;
  title = "angular-google-maps-app";
  @ViewChild("myGoogleMap", { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;
  zoom = 12;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: "hybrid",
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
  };
  markers = [] as any;
  infoContent = "";

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.API_KEY}`,
        "callback"
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  // zoomIn() {
  //   if (this.zoom < this.maxZoom) this.zoom++;
  //   console.log("Get Zoom", this.map.getZoom());
  // }

  // zoomOut() {
  //   if (this.zoom > this.minZoom) this.zoom--;
  // }

  eventHandler(event: any, name: string) {
    console.log(event, name);
    // Add marker on double click event
    if (name === "mapDblclick") {
      this.dropMarker(event);
    }
  }

  // Markers
  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  dropMarker(event: any) {
    this.markers.push({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      label: {
        color: "blue",
        text: "Marker label " + (this.markers.length + 1),
      },
      title: "Marker title " + (this.markers.length + 1),
      info: "Marker info " + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    });
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
