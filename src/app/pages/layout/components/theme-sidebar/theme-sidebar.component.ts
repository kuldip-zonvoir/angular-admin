import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SharemeService } from 'src/app/partials/core/shareme.service';

@Component({
  selector: 'app-theme-sidebar',
  templateUrl: './theme-sidebar.component.html',
  styleUrls: ['./theme-sidebar.component.scss']
})
export class ThemeSidebarComponent implements OnInit,OnDestroy {
  visibleSidebar2: boolean;
  zvalue = "1000";
    subscription: Subscription;

  constructor(
    private shareData: SharemeService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.subscription = this.shareData.sidebarToggle.subscribe(data => {
      this.visibleSidebar2 = data;
    });
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
