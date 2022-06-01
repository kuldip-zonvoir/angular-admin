import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-manager-sidebar',
  templateUrl: './file-manager-sidebar.component.html',
  styleUrls: ['./file-manager-sidebar.component.scss']
})
export class FileManagerSidebarComponent implements OnInit {
  tabId = "0";
  isHidden = false;
  research:boolean;
  assignments:boolean;
  documents:boolean;
  downloads:boolean;
  picture:boolean;
  projects:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  toggleTab(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  selectFile(event) {
    console.log(event);
  }
}
