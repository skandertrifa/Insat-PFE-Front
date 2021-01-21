import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPFEsComponent } from './consulter-pfes.component';

describe('ConsulterPFEsComponent', () => {
  let component: ConsulterPFEsComponent;
  let fixture: ComponentFixture<ConsulterPFEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPFEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPFEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
