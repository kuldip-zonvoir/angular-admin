import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-help',
  templateUrl: './faq-help.component.html',
  styleUrls: ['./faq-help.component.scss']
})
export class FaqHelpComponent implements OnInit {
  oneAtATime: boolean = true;
  isAccordionArr = [true, false, false, false,];
  isUseAccordionArr = [true, false, false, false, ];
  constructor() { }

  ngOnInit(): void {
  }
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
  faqs1 = [
    {
      title: 'How do I get  theme template ? ',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },
    {
      title: 'Is this one time payment ?',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },
    {
      title: 'How to get paymets ?',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },
    {
      title: 'which payments method do you support ?',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },

  ]
  faqs2 = [
    {
      title: ' How it works ? ',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },
    {
      title: 'Is using this theme is safe ?',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },
    {
      title: 'How many time we will get support service ?',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },
    {
      title: 'How much the cost to renew support service ?',
      para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
      para3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi dolor eius impedit consectetur ea!',
    },
   
  ]
}
