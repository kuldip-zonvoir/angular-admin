import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-engauge",
  templateUrl: "./engauge.component.html",
  styleUrls: ["./engauge.component.scss"],
})
export class EngaugeComponent implements OnInit {
  @Output("funNotificationDropdown")
  funNotificationDropdown: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  openNotification() {
    this.funNotificationDropdown.emit();
    console.log("this is not clicked");
  }
}
