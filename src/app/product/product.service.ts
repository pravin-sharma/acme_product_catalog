import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private productUrl: string = 'api/product.json';
  product!: IProduct

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl);
  }

  getProduct(id:Number): Observable<IProduct|undefined>{
    return this.getProducts().pipe(
      map(products=> products.find(p=>p.productId==id))
    )
  }
}
