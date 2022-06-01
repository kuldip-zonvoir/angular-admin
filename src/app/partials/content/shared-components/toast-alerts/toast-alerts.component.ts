import { Component, Input, OnInit } from "@angular/core";
import { MessageService, PrimeNGConfig } from "primeng/api";

@Component({
  selector: "app-toast-alerts",
  templateUrl: "./toast-alerts.component.html",
  styleUrls: ["./toast-alerts.component.scss"],
  providers: [MessageService],
})
export class ToastAlertsComponent implements OnInit {
  @Input() customAlert: any;
  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    console.log(this.customAlert);

    this.primengConfig.ripple = true;
  }
  showToast(data: any) {
    this.messageService.add(data);
  }
  onConfirm() {
    this.messageService.clear("c");
  }

  onReject() {
    this.messageService.clear("c");
  }

  clear() {
    this.messageService.clear();
  }
}
