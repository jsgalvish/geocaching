import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPagePage } from './location-page.page';

describe('LocationPagePage', () => {
  let component: LocationPagePage;
  let fixture: ComponentFixture<LocationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
