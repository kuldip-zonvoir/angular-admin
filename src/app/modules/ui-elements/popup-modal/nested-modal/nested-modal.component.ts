import { Component, OnInit, TemplateRef } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-nested-modal',
  templateUrl: './nested-modal.component.html',
  styleUrls: ['./nested-modal.component.scss']
})
export class NestedModalComponent implements OnInit {
  tabId = "0";
  showCode = false;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
  <button type="button" class="btn btn-primary" (click)="parentModal.show()">Open parent modal</button>
  <div class="modal fade" bsModal #parentModal="bs-modal" tabindex="-1" role="dialog" aria-labelledby="dialog-nested-name1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 id="dialog-nested-name1" class="modal-title pull-left">First modal</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="parentModal.hide()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <button type="button" class="btn btn-primary" (click)="childModal.show()">Open second modal</button>
        </div>
      </div>
    </div>
  </div>
   
  <div class="modal fade" bsModal #childModal="bs-modal" tabindex="-1" role="dialog" aria-labelledby="dialog-nested-name2">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 id="dialog-nested-name2" class="modal-title pull-left">Second modal</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="childModal.hide()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          This is second modal <br>
          <button type="button" class="btn btn-primary" (click)="thirdModal.show()">Open third modal</button>
        </div>
      </div>
    </div>
  </div>
   
  <div class="modal fade" bsModal #thirdModal="bs-modal" tabindex="-1" role="dialog" aria-labelledby="dialog-nested-name3">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h4 id="dialog-nested-name3" class="modal-title pull-left">Third modal</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="thirdModal.hide()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          This is third modal <br>
          Click <b>&times;</b> to close modal.
        </div>
      </div>
    </div>
  </div>
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'demo-modal-nested',
    templateUrl: './nested.html'
  })
  export class DemoModalNestedComponent {}
        `;

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

}
