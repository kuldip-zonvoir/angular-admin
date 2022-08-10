import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-note-card",
  templateUrl: "./note-card.component.html",
  styleUrls: ["./note-card.component.scss"],
})
export class NoteCardComponent implements OnInit {
  @Input() customNote: any;
  constructor() {}

  ngOnInit(): void {}
  getClass(value) {
    let cssClass;
    if (value <= 3) {
      return (cssClass = "border-top-3-danger");
    } else if (value == 5) {
      return (cssClass = "border-top-3-primary");
    } else if (value > 5) {
      return (cssClass = "border-top-3-success");
    }
    return cssClass;
  }
  getIconColor(value) {
    let cssClass;
    if (value <= 4) {
      return (cssClass = "text-danger");
    } else if (value == 5) {
      return (cssClass = "text-primary");
    } else if (value > 5) {
      return (cssClass = "text-success");
    }
    return cssClass;
  }
  custom_dropdown = [
    {
      click_icon: "more_vert",
      dropdown_lists: [
        {
          id: "1",
          dropdown_icon: "remove_red_eye ",
          dropdown_title: "View",
        },
        {
          id: "2",
          dropdown_icon: "edit ",
          dropdown_title: "Edit",
        },
        {
          id: "3",
          dropdown_icon: "delete ",
          dropdown_title: "Delete",
        },
      ],
    },
  ];
}
