import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharemeService } from 'src/app/partials/core/shareme.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit,OnDestroy {
@Input() modalTitle:string;
@Input() modalWidth:string;
@Input() customSelector:string;
  modalHeading:string;
  modalLength:string;
  parentSelector:string;
  modalState:boolean;
  modalState2:boolean;
  modalState1:string;
  popupWidth:any ={};
  popupHeight: any = {};
    subscription: Subscription;
    subscription1: Subscription;

  constructor(
    private shared_Service:SharemeService
  ) { }

  ngOnInit(): void {
   this.subscription = this.shared_Service.modalToggle.subscribe((value) =>{
      this.modalState = value;
    });

   this.subscription1 =  this.shared_Service.modalToggle1.subscribe((value) =>{
      this.modalState1 = value;
      this.modalState2 = (this.customSelector == this.modalState1) && this.modalState;
      console.log('customSelector sdf', this.customSelector, value, this.modalState2);
    });
    this.modalHeading = this.modalTitle;
     this.modalLength= this.modalWidth; 
     this.parentSelector = this.customSelector;
     Object.assign(this.popupWidth, {width: this.modalLength});
     
    
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }

}
