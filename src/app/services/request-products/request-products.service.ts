import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestProductsService {
  urlBase: string = "https://fakestoreapi.com";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.urlBase}/products`);
  }
}
