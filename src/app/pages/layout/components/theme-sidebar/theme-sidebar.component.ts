import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SharemeService } from 'src/app/partials/core/shareme.service';

@Component({
  selector: 'app-theme-sidebar',
  templateUrl: './theme-sidebar.component.html',
  styleUrls: ['./theme-sidebar.component.scss']
})
export class ThemeSidebarComponent implements OnInit {
  visibleSidebar2: boolean;
  zvalue = "1000";
  constructor(
    private shareData: SharemeService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.shareData.sidebarToggle.subscribe(data => {
      this.visibleSidebar2 = data;
      console.log('initial stage' + this.visibleSidebar2);
    });
  }

}
