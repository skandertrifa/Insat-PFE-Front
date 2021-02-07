import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportCellComponent } from './rapport-cell.component';

describe('RapportCellComponent', () => {
  let component: RapportCellComponent;
  let fixture: ComponentFixture<RapportCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
