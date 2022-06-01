import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-auto-modal',
  templateUrl: './auto-modal.component.html',
  styleUrls: ['./auto-modal.component.scss']
})
export class AutoModalComponent implements OnInit {
  tabId = "0";
  showCode = false;
  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;


  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
  <button type="button" class="btn btn-primary" (click)="showModal()">Render auto-shown modal</button>
  <div *ngIf="isModalShown" [config]="{ show: true }" (onHidden)="onHidden()" bsModal #autoShownModal="bs-modal"
       class="modal fade" tabindex="-1" role="dialog" aria-labelledby="dialog-auto-name">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h4 id="dialog-auto-name" class="modal-title pull-left">Auto shown modal</h4>
          <button type="button" class="close pull-right" aria-label="Close" (click)="hideModal()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>I am a modal that is shown right after initialization!</p>
          <p>I wasn't present in DOM until you clicked the button</p>
          <p>When you close me, I'll be removed from the DOM</p>
        </div>
      </div>
    </div>
  </div>
        `;
  tscode = `
    import { Component, ViewChild } from '@angular/core';
    import { ModalDirective } from 'ngx-bootstrap/modal';
    
    @Component({
      selector: 'demo-modal-auto-shown',
      templateUrl: './auto-shown.html'
    })
    export class DemoAutoShownModalComponent {
      @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
      isModalShown = false;
    
      showModal(): void {
        this.isModalShown = true;
      }
    
      hideModal(): void {
        this.autoShownModal.hide();
      }
    
      onHidden(): void {
        this.isModalShown = false;
      }
    }
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
