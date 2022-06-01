import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedular-sidebar",
  templateUrl: "./schedular-sidebar.component.html",
  styleUrls: ["./schedular-sidebar.component.scss"],
})
export class SchedularSidebarComponent implements OnInit {
  eventTypes = [
    {
      id: "1",
      eventColor: "#6971ff",
      type: "Casual",
    },
    {
      id: "2",
      eventColor: "#ff2694",
      type: "Personal",
    },
    {
      id: "3",
      eventColor: "#06d79c",
      type: "Work",
    },
    {
      id: "4",
      eventColor: "#fa555d",
      type: "Appointments",
    },
  ];
  Events = [
    {
      id: "1",

      title: "event kk 1",
      date: "10 Dec",
      type: "casual",
      description: "Lorem ispum Lorem ispum Lorem ispum",
      color: "#F12123",
      textColor: "#fdae12",
      backgroundColor: "#f23123",
    },
    {
      id: "2",
      title: "event 2",
      date: "11 Jun",
      color: "#F12123",
      backgroundColor: "#f23123",
      type: "personal",
      description: "Lorem ispum Lorem ispum Lorem ispum",
    },
    {
      id: "3",
      backgroundColor: "#06d79c",
      title: "Vijay Dashmi",
      date: "15 Feb",
      type: "work",
      description: "Lorem ispum Lorem ispum Lorem ispum",
    },
    {
      id: "4",
      backgroundColor: "#fa555d",
      title: "Diwali",
      date: "15 Nov",
      type: "appointment",
      description: "Lorem ispum Lorem ispum Lorem ispum",
    },
    {
      id: "5",
      backgroundColor: "#6971ff",
      title: "Holi",
      type: "casual",
      date: "23 Mar",
    },
    {
      id: "6",
      backgroundColor: "#6971ff",
      title: "Appointment",
      date: "2 Apr",
      type: "casual",
      description: "Lorem ispum Lorem ispum Lorem ispum",
    },
    {
      id: "8",
      title: "Birthday Party",
      date: "6 June",
      backgroundColor: "#06d79c",
      type: "work",
      description: "Lorem ispum Lorem ispum Lorem ispum",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
