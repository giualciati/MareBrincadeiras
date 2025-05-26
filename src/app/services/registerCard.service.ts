import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './types/registerCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterCardService {

  private readonly API = 'http://localhost:3000/registerCard';

  constructor(private http: HttpClient) { }

  listar(): Observable<Card[]> {
    return this.http.get<Card[]>(this.API);
  }

  excluir(id: number): Observable<Card> {
    return this.http.delete<Card>(this.API + `/${id}`);
  }


  buscarCep(cep: String): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  cadastrarCartao(formCard: any): Observable<any> {
    return this.http.post(this.API, formCard);
  }

}
