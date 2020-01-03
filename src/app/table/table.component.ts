import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatIconRegistry } from '@angular/material';
import { ShoppingListService } from '../shopping-list.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ShoppingList } from '../Shopping-list.model';
import { AddItemDialogueComponent } from './add-item.dialogue'

@Component({
  selector: 'table-component',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit {

  list: ShoppingList;
  name: string;
  editMode: boolean;

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
  public dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    // this.getInitialShoppingList()
    this.getShoppingList()
  }

  deleteItem(_id) {
    this._shoppingListService.deleteShoppingList(_id)
    .subscribe(() => this.getShoppingList())
  }
  
  getInitialShoppingList() {
    this._shoppingListService.getInitialShoppingList()
    .subscribe((list: ShoppingList[]) => {
      this.dataSource = new MatTableDataSource(list);
      this.dataSource.paginator = this.paginator;
      return this.dataSource.sort = this.sort;
    })
  }

  onToggleChange($event, row) {}
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getShoppingList() {
    this._shoppingListService.getShoppingList()
    .subscribe((res:ShoppingList[]) => {
      this.dataSource = res})
  }
  
  openDialog(element, _id): void {
    element ? this.editMode = true : this.editMode = false;
    let dialogRef = this.dialog.open(AddItemDialogueComponent, {
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
        .subscribe(() => this.getShoppingList())
      } else {
        this._shoppingListService.postShoppingListItem(result.value)
        .subscribe(() => this.getShoppingList());
      }
    });
  }
  
}
