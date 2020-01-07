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

  getShoppingList(sortBy = 'metadata.createdAt', orderBy = -1, pageIndex, pageSize): Observable<ResponseModel> {
    const query = `?sortby=${sortBy}&orderby=${orderBy}&pageno=${pageIndex ? pageIndex : 0}&pagesize=${pageSize ? pageSize : 10}`
    return this.http.get<ResponseModel>(`/api/list/shoppinglist${query}`)
  }

  postShoppingListItem(list: ShoppingList) {
    return this.http.post<ShoppingList>(`${url}/api/list/record`, list);
  }

  deleteShoppingList(_id: string) {
    return this.http.delete(`${url}/api/list/record/${_id}`)
  }

  editShoppingListItem(_id: string, list: ShoppingList) {
    return this.http.put<ShoppingList>(`${url}/api/list/record/${_id}`, list)
  }

}
