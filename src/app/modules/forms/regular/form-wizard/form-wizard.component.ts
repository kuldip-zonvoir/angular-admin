import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
  stepId = '1'
  constructor() { }

  ngOnInit(): void {
  }
  changeStep(step) {
    if (step != this.stepId) {
      this.stepId = step;
    }
  }
}
