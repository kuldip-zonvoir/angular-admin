import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-file-drag-n-drop",
  templateUrl: "./file-drag-n-drop.component.html",
  styleUrls: ["./file-drag-n-drop.component.scss"],
})
export class FileDragNDropComponent implements OnInit {
  imageSrc: string;
  filename: string;
  filetype: string;
  filesize: number;
  error: string;
  items: any = [];
  dragAreaClass: string;
  constructor() {}

  ngOnInit(): void {}
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }
  saveFiles(files: FileList) {
    if (files.length < 1) this.error = "Only one file at time allow";
    else {
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        this.items.push({
          itemname: files[index].name,
          itemsize: files[index].size,
          itemtype: files[index].type,
        });
      }
    }
  }
  selectFile(event) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
}
