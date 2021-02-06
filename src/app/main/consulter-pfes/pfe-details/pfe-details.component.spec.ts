import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeDetailsComponent } from './pfe-details.component';

describe('PfeDetailsComponent', () => {
  let component: PfeDetailsComponent;
  let fixture: ComponentFixture<PfeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
