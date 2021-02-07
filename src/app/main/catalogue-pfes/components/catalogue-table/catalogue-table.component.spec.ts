import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueTableComponent } from './catalogue-table.component';

describe('CatalogueTableComponent', () => {
  let component: CatalogueTableComponent;
  let fixture: ComponentFixture<CatalogueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
