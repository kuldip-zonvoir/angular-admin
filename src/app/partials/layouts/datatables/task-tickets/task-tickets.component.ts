import { Component, OnInit } from "@angular/core";
import { TicketsService } from "src/app/partials/core/services/tickets.service";

@Component({
  selector: "app-task-tickets",
  templateUrl: "./task-tickets.component.html",
  styleUrls: ["./task-tickets.component.scss"],
})
export class TaskTicketsComponent implements OnInit {
  ticketLists = [];
  ticketDialog: boolean;
  confirmDialog: boolean;
  assignedPerson = [];
  selectedPerson: string;
  popupId: string;
  constructor(private _ticketService: TicketsService) {
    this.assignedPerson = [
      {
        value: "0",
        lable: "David",
      },
      {
        value: "1",
        lable: "Arya",
      },
      {
        value: "2",
        lable: "Kate",
      },
    ];
  }

  ngOnInit(): void {
    this.ticketLists = this._ticketService.getTickets();
    this._ticketService.ticketModalToggle.subscribe((item) => {
      this.ticketDialog = item;
    });
  }
  editTicket(id: string) {
    this.ticketDialog = true;
  }

  deleteTicket(id: string) {
    this.confirmDialog = true;
    this.popupId = id;
  }
  confirmDelete(id) {
    this.confirmDialog = false;
    this._ticketService.deleteTicket(id);
  }
  cancelDelete() {
    this.confirmDialog = false;
  }
  updateTicket() {
    this.ticketDialog = false;
  }
  termsPara = [
    {
      id: "0",
      para_name: "Closed ",
    },
    {
      id: "1",
      para_name: "In Progress",
    },
    {
      id: "2",
      para_name: "Pending",
    },
  ];
}
