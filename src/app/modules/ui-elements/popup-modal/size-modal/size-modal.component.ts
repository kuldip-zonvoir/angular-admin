import { Component, OnInit, TemplateRef } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: "app-size-modal",
  templateUrl: "./size-modal.component.html",
  styleUrls: ["./size-modal.component.scss"],
})
export class SizeModalComponent implements OnInit {
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
    <!--Large modal-->
    <p>Small modal window have small width on screens only above 768px(boostrap3) and 576px(bootstrap4)</p>
    <button class="btn btn-primary" (click)="lgModal.show()">Large modal</button>
    
    <div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1"
        role="dialog" aria-labelledby="dialog-sizes-name1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="dialog-sizes-name1" class="modal-title pull-left">Large modal</h4>
            <button type="button" class="close pull-right" (click)="lgModal.hide()" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
    
    
    <!--Small modal-->
    <button type="button" class="btn btn-primary" (click)="smModal.show()">Small modal</button>
    
    <div bsModal #smModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="dialog-sizes-name2">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="dialog-sizes-name2" class="modal-title pull-left">Small modal</h4>
            <button type="button" class="close pull-right" aria-label="Close" (click)="smModal.hide()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
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
