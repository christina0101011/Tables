import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
} from '@angular/material';

import { AddItemDialogueComponent } from './add-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddItemDialogueComponent],
  entryComponents: [AddItemDialogueComponent],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class DialogModule {}