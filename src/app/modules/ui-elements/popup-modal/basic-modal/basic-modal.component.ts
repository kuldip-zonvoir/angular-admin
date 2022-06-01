import { Component, OnInit, TemplateRef } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-basic-modal",
  templateUrl: "./basic-modal.component.html",
  styleUrls: ["./basic-modal.component.scss"],
})
export class BasicModalComponent implements OnInit {
  tabId = "0";
  showCode = false;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  };

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  ngOnInit(): void {}
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
    <button type="button" class="btn btn-primary" (click)="openModal(template)">Create template modal</button>
  
    <ng-template #template>
      <div class="modal-header">
        <h4 class="modal-title pull-left">Modal</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        This is a modal.
      </div>
    </ng-template>
        `;
  tscode = `
  import { Component, TemplateRef } from '@angular/core';
  import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
   
  @Component({
    selector: 'demo-modal-service-static',
    templateUrl: './service-template.html'
  })
  export class DemoModalServiceStaticComponent {
    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  }
        `;

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: "{...}",
      top: "{...}",
      value: "{...}",
    };
  }
}
