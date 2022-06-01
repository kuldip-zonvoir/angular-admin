import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-file-input",
  templateUrl: "./file-input.component.html",
  styleUrls: ["./file-input.component.scss"],
})
export class FileInputComponent implements OnInit {
  fileName = "Choose File";
  constructor() {}

  ngOnInit(): void {}
  selectFile(file) {
    this.fileName = file.target.files[0].name;
  }
}
