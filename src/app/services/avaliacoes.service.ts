import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avaliacao } from './types/avaliacoes';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesService {
  private readonly API = 'http://localhost:3000/avaliacoes';

  constructor(private http: HttpClient) {}

  listar(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(this.API);
  }

  criar(avaliacao: Omit<Avaliacao, 'id'>): Observable<Avaliacao> {
    return this.http.post<Avaliacao>(this.API, avaliacao);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
  
  adicionarAvaliacao(avaliacao: any): Observable<any> {
  return this.http.post('http://localhost:3000/avaliacoes', avaliacao);
}
}

