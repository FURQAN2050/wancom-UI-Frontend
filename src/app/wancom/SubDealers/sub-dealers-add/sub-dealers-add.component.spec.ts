import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDealersAddComponent } from './sub-dealers-add.component';

describe('SubDealersAddComponent', () => {
  let component: SubDealersAddComponent;
  let fixture: ComponentFixture<SubDealersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDealersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDealersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
