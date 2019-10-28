import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalessummaryComponent } from './salessummary.component';

describe('SalessummaryComponent', () => {
  let component: SalessummaryComponent;
  let fixture: ComponentFixture<SalessummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalessummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalessummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
