import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './tables-routes';
import { DialogModule } from './add-item.dialogue';
import {
	MatTableModule,
	MatSortModule,
	MatOptionModule,
	MatSelectModule,
	MatRadioModule,
	MatCheckboxModule,
	MatPaginatorModule,
	MatSlideToggleModule,
	MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
		MatSortModule,
		MatOptionModule,
		MatSelectModule,
		MatRadioModule,
		MatCheckboxModule,
		MatPaginatorModule,
		MatSlideToggleModule,
		MatInputModule,
		DialogModule
  ]
})

export class TableModule { }
