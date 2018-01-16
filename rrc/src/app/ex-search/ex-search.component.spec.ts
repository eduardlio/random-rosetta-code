import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSearchComponent } from './ex-search.component';

describe('ExSearchComponent', () => {
  let component: ExSearchComponent;
  let fixture: ComponentFixture<ExSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
