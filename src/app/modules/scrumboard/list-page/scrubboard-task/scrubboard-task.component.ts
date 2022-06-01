import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { SharemeService } from "src/app/partials/core/shareme.service";
@Component({
  selector: "app-scrubboard-task",
  templateUrl: "./scrubboard-task.component.html",
  styleUrls: ["./scrubboard-task.component.scss"],
})
export class ScrubboardTaskComponent implements OnInit {
  @Input() tasks: any = {};
  @Output() taskInfoModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  fileAttachment: boolean;
  Dialog;
  cardDetails: boolean;
  modalState: boolean;
  activeTheme: string;

  constructor(private shared_service: SharemeService) {}

  ngOnInit(): void {
    this.shared_service.modalToggle.subscribe((value) => {
      this.modalState = value;
    });
  }
  fileAttachmentDialog() {
    this.fileAttachment = true;
  }
  cardModal() {
    this.cardDetails = true;
    this.taskInfoModal.emit(this.cardDetails);
  }
}
