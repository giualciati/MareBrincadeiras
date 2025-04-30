import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterCardService {

  private readonly API = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) { }

  buscarCep(cep: String): Observable<any>{
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  cadastrarCartao(formCard: any): Observable<any> {
    return this.http.post(this.API, formCard);
  }
  
}
