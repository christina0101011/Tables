import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatIconRegistry } from '@angular/material';
import { ShoppingListService } from '../shopping-list.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ShoppingList } from '../interfaces/shopping-list.model';
import { AddItemDialogueComponent } from './add-item.dialogue';
import { ShoppingListResponse } from '../interfaces/shopping-list-response.model';

@Component({
  selector: 'app-table-component',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit {
  name: string;
  editMode: boolean;
  recordsAmount: number;
  dataSource;

  constructor(
    private _shoppingListService: ShoppingListService,
    public dialog: MatDialog,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/garbage.svg'));
  }

  public  displayedColumns: string[] = [
    'index',
    'itemName',
    'amount',
    'price',
    'comments',
    'added',
    'priority',
    'done',
    'actions'
  ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    // run this function once to set initial data
    // this.getInitialShoppingList();

    this.getShoppingList();
  }

  onQueriesChange(event?): void {
    this.getShoppingList(
      this.sort.active,
      this.sort.direction === 'asc' ? 1 : -1,
      event ? event.pageIndex : 0,
      event ? event.pageSize : 10
    );
  }

  deleteItem(_id) {
    this._shoppingListService.deleteShoppingList(_id)
    .subscribe(() => this.getShoppingList());
  }

  // Fills database with initial data
  getInitialShoppingList() {
    this._shoppingListService.getInitialShoppingList()
    .subscribe((list: ShoppingList[]) => {
      list.forEach(element => {
        this._shoppingListService.postShoppingListItem(element)
        .subscribe(() => this.getShoppingList());
      });
    });
  }

  onToggleChange($event, row, _id) {
    row.done = $event.checked;
    this._shoppingListService.editShoppingListItem(_id, row)
    .subscribe(() => this.getShoppingList());
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // fetches latest dataset
  getShoppingList(sortBy?, orderBy?, pageNo?, pageSize?) {
    this._shoppingListService.getShoppingList(sortBy, orderBy, pageNo, pageSize)
    .subscribe((res: ShoppingListResponse) => {
      this.dataSource = new MatTableDataSource(res.list);
      this.recordsAmount = res.recordsAmount;
      return this.dataSource.sort = this.sort;
    });
  }

  openDialog(element, _id): void {
    element ? this.editMode = true : this.editMode = false;
    const dialogRef = this.dialog.open(AddItemDialogueComponent, {
      width: '600px',
      data: element ? element : {
        amountDetails: {
          amount: 1,
          units: '',
        },
        comments: '',
        done: false,
        itemName: '',
        metadata: {
          createdAt: Date.now()
        },
        price: {
          currency: 'UAH',
          pricePerUnit: ''
        },
        priority: 'Low'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.editMode) {
        this._shoppingListService.editShoppingListItem(_id, result.value)
        .subscribe(() => this.getShoppingList());
      } else {
        this._shoppingListService.postShoppingListItem(result.value)
        .subscribe(() => this.getShoppingList());
      }
    });
  }

}
