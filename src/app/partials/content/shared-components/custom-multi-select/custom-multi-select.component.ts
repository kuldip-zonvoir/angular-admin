import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, SelectDataService } from 'src/app/partials/core/selectdata.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-custom-multi-select',
  templateUrl: './custom-multi-select.component.html',
  styleUrls: ['./custom-multi-select.component.scss']
})
export class CustomMultiSelectComponent implements OnInit {
  people: Person[] = [];
  selectedPeople = [];
  people$: Observable<Person[]>;
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
  constructor(
    private dataService: SelectDataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPeople()
    .pipe(map(x => x.filter(y => !y.disabled)))
    .subscribe((res) => {
      this.people = res;
      this.selectedPeople = [this.people[0].id, this.people[1].id];
    });
  this.people$ = this.dataService.getPeople();
  }
}
