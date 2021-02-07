import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-sujet-cell',
  templateUrl: './sujet-cell.component.html',
  styleUrls: ['./sujet-cell.component.scss']
})
export class SujetCellComponent implements OnInit {

  @Input() value: string | number;
  @Input() rowData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
