import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwisesalesComponent } from './productwisesales.component';

describe('ProductwisesalesComponent', () => {
  let component: ProductwisesalesComponent;
  let fixture: ComponentFixture<ProductwisesalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductwisesalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductwisesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
