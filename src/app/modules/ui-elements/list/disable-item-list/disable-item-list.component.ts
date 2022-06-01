import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-disable-item-list',
  templateUrl: './disable-item-list.component.html',
  styleUrls: ['./disable-item-list.component.scss']
})
export class DisableItemListComponent implements OnInit {
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
  <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action disabled">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
        `;
  tscode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-list-group',
    templateUrl: './list-group.component.html'
  })
  export class ListGroupComponent {}
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
