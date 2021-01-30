import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeCardComponent } from './pfe-card.component';

describe('PfeCardComponent', () => {
  let component: PfeCardComponent;
  let fixture: ComponentFixture<PfeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
