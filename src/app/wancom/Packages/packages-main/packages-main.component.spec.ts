import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesMainComponent } from './packages-main.component';

describe('PackagesMainComponent', () => {
  let component: PackagesMainComponent;
  let fixture: ComponentFixture<PackagesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
