import { CataloguePFEsRoutingModule } from './catalogue-pfes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CataloguePFEsComponent } from './catalogue-pfes.component';
import { CatalogueTableComponent } from './components/catalogue-table/catalogue-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { SujetCellComponent } from './components/sujet-cell/sujet-cell.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RapportCellComponent } from './components/rapport-cell/rapport-cell.component';



@NgModule({
  declarations: [CataloguePFEsComponent, CatalogueTableComponent, SujetCellComponent, RapportCellComponent],
  imports: [
    CommonModule,
    FormsModule,
    CataloguePFEsRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgbModule,
    
  ]
})
export class CataloguePFEsModule { }
