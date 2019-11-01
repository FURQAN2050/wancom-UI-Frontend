import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersMainComponent } from './dealers-main.component';

describe('DealersMainComponent', () => {
  let component: DealersMainComponent;
  let fixture: ComponentFixture<DealersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
