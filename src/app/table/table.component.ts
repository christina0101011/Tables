import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingList } from '../Shopping-list.model';

@Component({
  selector: 'table-component',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit {

constructor(private _shoppingListService: ShoppingListService) {}

 public  displayedColumns: string[] = [
    'index',
    'item',
    'amount',
    'price',
    'comments',
    'added',
    'prioruty',
    'done'
  ];
  public dataSource;

  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    this.getInitialShoppingList()
  }
  
  getInitialShoppingList() {
    this._shoppingListService.getInitialShoppingList()
    .subscribe((list: ShoppingList[]) => {
      console.log(2222,list, this.dataSource);
      return this.dataSource = new MatTableDataSource(list);
    })
  }

  onToggleChange($event, row) {
		console.log(999, $event, row) 
	}
  
}
