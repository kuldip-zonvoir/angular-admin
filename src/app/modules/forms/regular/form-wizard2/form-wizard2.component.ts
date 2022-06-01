import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-wizard2",
  templateUrl: "./form-wizard2.component.html",
  styleUrls: ["./form-wizard2.component.scss"],
})
export class FormWizard2Component implements OnInit {
  stepId = 0;
  stepOutId = 0;
  step_vrId = 0;
  step_vroId = 0;
  constructor() {}

  ngOnInit(): void {}
  changeStep(step) {
    if (step != this.stepId) {
      this.stepId = step;
    }
  }
  nextStep(step) {
    this.stepId = step + 1;
    console.log(this.stepId);
  }
  prevStep(step) {
    this.stepId = step - 1;
    console.log(this.stepId);
  }
  nextOutStep(step) {
    this.stepOutId = step + 1;
    console.log(this.stepOutId);
  }
  prevOutStep(step) {
    this.stepOutId = step - 1;
    console.log(this.stepOutId);
  }
  // vertical stepper form wizard
  nextVrStep(step) {
    this.step_vrId = step + 1;
    console.log(this.step_vrId);
  }
  prevVrStep(step) {
    this.step_vrId = step - 1;
    console.log(this.step_vrId);
  }
  nextVroStep(step) {
    this.step_vroId = step + 1;
  }
  prevVroStep(step) {
    this.step_vroId = step - 1;
  }

  steps = [
    {
      label: "Personal data",
      fields: [
        {
          key: "firstname",
          type: "input",
          templateOptions: {
            label: "First name",
            required: true,
          },
        },
        {
          key: "age",
          type: "input",
          templateOptions: {
            type: "number",
            label: "Age",
            required: true,
          },
        },
      ],
    },
    {
      label: "Destination",
      fields: [
        {
          key: "country",
          type: "input",
          templateOptions: {
            label: "Country",
            required: true,
          },
        },
      ],
    },
    {
      label: "Day of the trip",
      fields: [
        {
          key: "day",
          type: "input",
          templateOptions: {
            type: "date",
            label: "Day of the trip",
            required: true,
          },
        },
      ],
    },
  ];
}
