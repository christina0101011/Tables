import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ShoppingListService } from '../shopping-list.service';
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

constructor(private _shoppingListService: ShoppingListService, public dialog: MatDialog) {}

 public  displayedColumns: string[] = [
    'index',
    'itemName',
    'amount',
    'price',
    'comments',
    'added',
    'priority',
    'done'
  ];
  public dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getInitialShoppingList()
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
  
  openDialog(): void {
    let dialogRef = this.dialog.open(AddItemDialogueComponent, {
      width: '600px',
      data: { 
        amountDetails: {
          amount: '',
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
      this.list = result;
      console.log('The dialog was closed', this.list );
    });
  }
  
}
