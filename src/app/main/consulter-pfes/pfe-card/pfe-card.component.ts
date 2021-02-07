import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pfe-card',
  templateUrl: './pfe-card.component.html',
  styleUrls: ['./pfe-card.component.scss']
})
export class PfeCardComponent implements OnInit {

  constructor() { }
  @Input('sujet')
  sujet;

  ngOnInit(): void {

  }



}
