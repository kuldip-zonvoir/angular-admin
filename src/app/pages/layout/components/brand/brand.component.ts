import { SharemeService } from 'src/app/partials/core/shareme.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit,OnDestroy {
  isMobile: boolean;
  key = '';
    subscription: Subscription;

  constructor(private shareData: SharemeService) { }

  ngOnInit(): void {
    this.subscription = this.shareData.sidebarToggle.subscribe(data => {
      this.isMobile = data;
    })
  }
    ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
