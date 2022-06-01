import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HighlightResult } from 'ngx-highlightjs';

interface DataSourceType {
  id: number;
  name: string;
  region: string;
}
@Component({
  selector: 'app-async-data-typehed',
  templateUrl: './async-data-typehed.component.html',
  styleUrls: ['./async-data-typehed.component.scss']
})
export class AsyncDataTypehedComponent implements OnInit {
  tabId = "0";
  showCode = false;
  asyncSelected: string;
  dataSource: Observable<DataSourceType[]>;
  typeaheadLoading: boolean;
  statesComplex: DataSourceType[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
  ];

  constructor() {
    this.dataSource = new Observable((observer: Subscriber<string>) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => this.getStatesAsObservable(token))
      );
  }

  getStatesAsObservable(token: string): Observable<DataSourceType[]> {
    const query = new RegExp(token, 'i');

    return of(
      this.statesComplex.filter((state: any) => {
        return query.test(state.name);
      })
    );
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  ngOnInit(): void {
  }
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
  response: HighlightResult;

  htmlcode = `
    <pre class="card card-block card-header mb-3">Model: {{selected | json}}</pre>
    <input [(ngModel)]="selected"
           [typeahead]="states"
           [isAnimated]="true"
           class="form-control">
        `;
  tscode = `
  import { Component } from '@angular/core';
 
  import { Observable, of, Subscriber } from 'rxjs';
  import { mergeMap } from 'rxjs/operators';
   
  interface DataSourceType {
    id: number;
    name: string;
    region: string;
  }
   
  @Component({
    selector: 'demo-typeahead-async',
    templateUrl: './async.html'
  })
  export class DemoTypeaheadAsyncComponent {
    asyncSelected: string;
    dataSource: Observable<DataSourceType[]>;
    typeaheadLoading: boolean;
    statesComplex: DataSourceType[] = [
      { id: 1, name: 'Alabama', region: 'South' },
      { id: 2, name: 'Alaska', region: 'West' },
      { id: 3, name: 'Arizona', region: 'West' },
      { id: 4, name: 'Arkansas', region: 'South' },
      { id: 5, name: 'California', region: 'West' },
      { id: 6, name: 'Colorado', region: 'West' },
      { id: 7, name: 'Connecticut', region: 'Northeast' },
      { id: 8, name: 'Delaware', region: 'South' },
      { id: 9, name: 'Florida', region: 'South' },
      { id: 10, name: 'Georgia', region: 'South' }
    ];
   
    constructor() {
      this.dataSource = new Observable((observer: Subscriber<string>) => {
        // Runs on every search
        observer.next(this.asyncSelected);
      })
        .pipe(
          mergeMap((token: string) => this.getStatesAsObservable(token))
        );
    }
   
    getStatesAsObservable(token: string): Observable<DataSourceType[]> {
      const query = new RegExp(token, 'i');
   
      return of(
        this.statesComplex.filter((state: any) => {
          return query.test(state.name);
        })
      );
    }
   
    changeTypeaheadLoading(e: boolean): void {
      this.typeaheadLoading = e;
    }
  }
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
