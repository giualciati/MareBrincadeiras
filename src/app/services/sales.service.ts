import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { sales } from './types/sales';


@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'http://localhost:3000/sales';
  constructor(private http: HttpClient) {}

  Registrarvenda(venda: sales): Observable<sales> {
    return this.http.post<sales>(this.apiUrl, venda);
  }

   listarVendas(): Observable<sales[]> {
    return this.http.get<sales[]>(this.apiUrl);
  }
}
