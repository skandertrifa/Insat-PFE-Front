import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerPFEComponent } from './deposer-pfe.component';

describe('DeposerPFEComponent', () => {
  let component: DeposerPFEComponent;
  let fixture: ComponentFixture<DeposerPFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposerPFEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerPFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
