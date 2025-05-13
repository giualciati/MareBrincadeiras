import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API = 'http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  listarProduto(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }

  criarProduto(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API, product);
  }

  buscarPorId(id : number): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  editarProduto(product: Product): Observable<Product>{
    const url = `${this.API}/${product.id}`;
    return this.http.put<Product>(url, product);
  };
  

  excluirProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
