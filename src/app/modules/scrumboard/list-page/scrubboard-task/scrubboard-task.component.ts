import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";

import { SharemeService } from "src/app/partials/core/shareme.service";
@Component({
  selector: "app-scrubboard-task",
  templateUrl: "./scrubboard-task.component.html",
  styleUrls: ["./scrubboard-task.component.scss"],
})
export class ScrubboardTaskComponent implements OnInit,OnDestroy {
  @Input() tasks: any = {};
  @Output() taskInfoModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  fileAttachment: boolean;
  Dialog;
  cardDetails: boolean;
  modalState: boolean;
  activeTheme: string;
  subscription: Subscription;

  constructor(private shared_service: SharemeService) {}

  ngOnInit(): void {
   this.subscription =  this.shared_service.modalToggle.subscribe((value) => {
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

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
