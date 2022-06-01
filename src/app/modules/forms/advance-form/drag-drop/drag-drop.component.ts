import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  imageSrc: string;
  filename: string;
  filetype: string;
  filesize: number;
  error: string;
  dragAreaClass: string;
  constructor() { }

  ngOnInit(): void {
  }
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

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      this.filename = files[0].name,
        this.filesize = files[0].size,
        this.filetype = files[0].type
    }
  }
  selectFile(event) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
}
