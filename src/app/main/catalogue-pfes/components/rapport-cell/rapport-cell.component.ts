import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-rapport-cell',
  templateUrl: './rapport-cell.component.html',
  styleUrls: ['./rapport-cell.component.scss']
})
export class RapportCellComponent implements OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
