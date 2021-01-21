import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguePFEsComponent } from './catalogue-pfes.component';

describe('CataloguePFEsComponent', () => {
  let component: CataloguePFEsComponent;
  let fixture: ComponentFixture<CataloguePFEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CataloguePFEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloguePFEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
