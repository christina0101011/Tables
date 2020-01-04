import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingList } from './Shopping-list.model';
import { ResponseModel } from './response.model';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  constructor(private http: HttpClient) {}

  getInitialShoppingList(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>('./assets/shoppng-list.json')
  }

  getShoppingList(sortBy = 'createdAt', orderBy = 1, pageIndex: 0, pageSize: 10): Observable<ResponseModel> {
    return this.http
    .get<ResponseModel>(`/api/shoppinglist?sortby=${sortBy}&orderby=${orderBy}&pageno=${pageIndex}&pagesize=${pageSize}`)
  }

  postShoppingListItem(list: ShoppingList) {
    return this.http.post<ShoppingList>(url + '/api/record', list);
  }

  deleteShoppingList(_id: string) {
    return this.http.delete(`${url}/api/record/${_id}`)
  }

  editShoppingListItem(_id: string, list: ShoppingList) {
    return this.http.put<ShoppingList>(`${url}/api/record/${_id}`, list)
  }

}
