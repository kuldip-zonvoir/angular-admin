import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tickets } from "../CollectionData/tabeldata";

@Injectable({
  providedIn: "root",
})
export class TicketsService {
  constructor() {}
  private ticketModal = new BehaviorSubject(false);
  ticketModalToggle = this.ticketModal.asObservable();
  toggleModalCoupon(value: boolean) {
    this.ticketModal.next(value);
  }
  getTickets() {
    return tickets;
  }
  findTickets(item: any) {
    tickets.filter((ticketsItem) => {});
  }
  addTicket(value) {
    tickets.push(value);
  }
  getTicket() {
    return tickets;
  }
  deleteTicket(id: string) {
    tickets.splice(
      tickets.findIndex(function (item) {
        return item.id === id;
      }),
      1
    );
  }
  updatetTicket(id: string) {
    return tickets;
  }
}
