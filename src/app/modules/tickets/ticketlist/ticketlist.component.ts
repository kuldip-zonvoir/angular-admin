import { Component, OnInit } from "@angular/core";
import { TicketsService } from "src/app/partials/core/services/tickets.service";

@Component({
  selector: "app-ticketlist",
  templateUrl: "./ticketlist.component.html",
  styleUrls: ["./ticketlist.component.scss"],
})
export class TicketlistComponent implements OnInit {
  ticketModal: boolean;
  constructor(private _ticketService: TicketsService) {}

  ngOnInit(): void {}
  addTicket() {
    this.ticketModal = true;
    this._ticketService.toggleModalCoupon(this.ticketModal);
  }
}
