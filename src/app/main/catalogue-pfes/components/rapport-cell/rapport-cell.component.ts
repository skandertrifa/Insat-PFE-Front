import { PfeService } from './../../../consulter-pfes/services/pfe.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-rapport-cell',
  templateUrl: './rapport-cell.component.html',
  styleUrls: ['./rapport-cell.component.scss']
})
export class RapportCellComponent implements OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private pfeService : PfeService) { }

  ngOnInit(): void {
    console.log("rapport value : ", this.rowData.idRapport)
  }
  handleDownloadRapportPfe(rapportID:number,filename:string){
    this.pfeService.downloadRapport(rapportID).subscribe(
      (response)=>{

        this.downloadBlob(new Blob([response.data]),filename)
      }
    );
  }

  downloadBlob(blob, name = 'file.pdf') {
    if (
      window.navigator &&
      window.navigator.msSaveOrOpenBlob
    ) return window.navigator.msSaveOrOpenBlob(blob);

    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = data;
    link.download = name;

    // this is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
    );
  }

}
