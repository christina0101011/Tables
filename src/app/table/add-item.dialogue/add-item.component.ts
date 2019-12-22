import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelect } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ShoppingList } from '../../Shopping-list.model'

@Component({
  selector: 'add-item-dialogue',
  templateUrl: 'add-item.component.html',
  styleUrls: ['add-item.component.scss'],
})

export class AddItemDialogueComponent implements OnInit {

  @ViewChild(MatSelect, {static: true}) matSelect: MatSelect;

  listForm: FormGroup;
  // priorities: ['Low', 'Medium', 'High']

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public list: ShoppingList,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listForm = this.initListForm()
  }

  initListForm(): FormGroup {
		return this._formBuilder.group({
      amountDetails: this._formBuilder.group ({
        amount: [this.list.amountDetails.amount, Validators.compose([Validators.required])],
        units: [this.list.amountDetails.units, Validators.compose([Validators.required])],
      }),
      comments: this.list.comments,
      done: this.list.done,
      itemName: [this.list.itemName, Validators.compose([Validators.required])],
      metadata: this._formBuilder.group({createdAt: this.list.metadata.createdAt}),
      price: this._formBuilder.group({
        currency: this.list.price.currency,
        pricePerUnit: this.list.price.pricePerUnit
      }),
      priority: this.list.priority
		});
	}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form) {
      console.log(444, form);
  }

}