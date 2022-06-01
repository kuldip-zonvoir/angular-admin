import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDashboardComponent } from './multi-dashboard.component';

describe('MultiDashboardComponent', () => {
  let component: MultiDashboardComponent;
  let fixture: ComponentFixture<MultiDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
