import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetCellComponent } from './sujet-cell.component';

describe('SujetCellComponent', () => {
  let component: SujetCellComponent;
  let fixture: ComponentFixture<SujetCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
