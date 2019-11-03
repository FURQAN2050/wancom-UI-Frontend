import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDealersMainComponent } from './sub-dealers-main.component';

describe('SubDealersMainComponent', () => {
  let component: SubDealersMainComponent;
  let fixture: ComponentFixture<SubDealersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDealersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDealersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
