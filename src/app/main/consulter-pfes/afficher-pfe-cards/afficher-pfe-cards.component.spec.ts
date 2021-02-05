import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPfeCardsComponent } from './afficher-pfe-cards.component';

describe('AfficherPfeCardsComponent', () => {
  let component: AfficherPfeCardsComponent;
  let fixture: ComponentFixture<AfficherPfeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPfeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPfeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
