import { Component, OnInit } from '@angular/core';
import { SharemeService } from 'src/app/partials/core/shareme.service';

@Component({
  selector: 'app-advance-select',
  templateUrl: './advance-select.component.html',
  styleUrls: ['./advance-select.component.scss']
})
export class AdvanceSelectComponent implements OnInit {
  isSelcetedState = false;
  selectedState: string;
  countries: any;
  States: any = [];
  selectorName = 'Choose Your State';
  constructor(
    private shareme: SharemeService
  ) { }

  ngOnInit(): void {
    this.States = this.shareme.State;
      // console.log(this.States);

  }


  onSelectState(value) {
    this.isSelcetedState = !this.isSelcetedState;
    this.selectedState = value;

  }

  selectState() {
    this.isSelcetedState = !this.isSelcetedState;
  }

  clickOutside() {
    this.isSelcetedState = false;
  }
}
