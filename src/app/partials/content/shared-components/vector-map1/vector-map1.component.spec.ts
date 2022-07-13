import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorMap1Component } from './vector-map1.component';

describe('VectorMap1Component', () => {
  let component: VectorMap1Component;
  let fixture: ComponentFixture<VectorMap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorMap1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorMap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
