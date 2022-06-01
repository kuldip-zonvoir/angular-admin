import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 26.86784, lng: 80.99617 };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = { draggable: true };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 26.86784, lng: 80.99617 },
  ];
  // marker in map
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  //circle in map
  circleCenter: google.maps.LatLngLiteral = { lat: 26.86784, lng: 80.99617 };
  radius = 10000;
  //polygon map
  vertices: google.maps.LatLngLiteral[] = [
    { lat: 26.86784, lng: 80.99617 },
    { lat: -26.8679, lng: 80.9962 },
    { lat: 26.8678, lng: -80.9961 },
    { lat: 26.8678, lng: -80.9961 },
  ];
  constructor() {}
  ngOnInit() {}
}
