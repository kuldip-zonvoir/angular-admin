import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-help",
  templateUrl: "./home-help.component.html",
  styleUrls: ["./home-help.component.scss"],
})
export class HomeHelpComponent implements OnInit {
  oneAtATime: boolean = true;
  isAccordionOpen: boolean = true;
  isAccordionArr = [true, false, false, false, false];
  isUseAccordionArr = [true, false, false, false, false];
  constructor() {}

  ngOnInit(): void {}
  openAccordion(index) {
    this.isAccordionArr.forEach((ac, i) => {
      if (index != i) {
        this.isAccordionArr[i] = false;
      }
    });
    this.isAccordionArr[index] = !this.isAccordionArr[index];
  }
  openUseAccordion(index) {
    this.isUseAccordionArr.forEach((ac, i) => {
      if (index != i) {
        this.isUseAccordionArr[i] = false;
      }
    });
    this.isUseAccordionArr[index] = !this.isUseAccordionArr[index];
  }
  install_steps = [
    {
      title: "Download",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Install",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Configure",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Lets start to use it",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Feedback",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
  ];
  using_steps = [
    {
      title: "Create New Project",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Configure your Project",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Add new task",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Genrate a Invoice",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
    {
      title: "Get a solution",
      para1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!",
    },
  ];
}
