import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorias } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API = 'http://localhost:3000/categorias';

  constructor(private http:HttpClient) { }

  listar(): Observable<categorias[]>{
    return this.http.get<categorias[]>(this.API);
  }

  criarCategoria(nome: string): Observable<categorias> {
    return this.http.post<categorias>(this.API, { nome });
  }

  
  atualizarCategoria(id: number, nome: string): Observable<categorias> {
    return this.http.put<categorias>(`${this.API}/${id}`, { id, nome });
  }


  excluirCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  getCategoriaPorId(id: number): Observable<categorias> {
    return this.http.get<categorias>(`${this.API}/${id}`);
  }
}
  
