import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxLineBarComponent } from './apx-line-bar.component';

describe('ApxLineBarComponent', () => {
  let component: ApxLineBarComponent;
  let fixture: ComponentFixture<ApxLineBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApxLineBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApxLineBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
