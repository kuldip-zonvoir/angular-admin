import { SharemeService } from 'src/app/partials/core/shareme.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  isMobile: boolean;
  key = '';
  constructor(private shareData: SharemeService) { }

  ngOnInit(): void {
    this.shareData.sidebarToggle.subscribe(data => {
      this.isMobile = data;
    })
  }

}
