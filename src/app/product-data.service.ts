import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { Observable, tap } from 'rxjs';

const URL="https://6372670c348e947299f499c2.mockapi.io/api/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll():Observable<Product[]> {
   return this.http.get<Product[]>(URL)
          .pipe(tap((productos : Product[])=> productos.forEach(prod=>prod.cantidad=1)));
  }

}
