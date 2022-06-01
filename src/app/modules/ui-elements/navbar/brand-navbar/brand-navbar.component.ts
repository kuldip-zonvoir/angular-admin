import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-brand-navbar',
  templateUrl: './brand-navbar.component.html',
  styleUrls: ['./brand-navbar.component.scss']
})
export class BrandNavbarComponent implements OnInit {
  tabId = "0";
  showCode = false;

  constructor() { }

  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
    
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </nav>
    
    <nav class="navbar navbar-light  bg-light">
        <a class="navbar-brand" routerLink=".">
        <img src="assets/media/images/other/logo-placeholder.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Logo
        </a>
    </nav>
        `;
  tscode = `
    import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
  })
  export class NavbarComponent {}
        `;

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }


}
