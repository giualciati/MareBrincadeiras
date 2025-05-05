import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from './types/customers';
import { Login } from './types/login';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private readonly API = 'http://localhost:3000/customers';
  private readonly LOCAL_STORAGE_KEY = 'usuarioLogado';

  private usuarioLogado: Customer | null = null;
  constructor(private http: HttpClient) { }

  listarCliente(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API);
  }

  cadastroCliente(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.API, customer);
  }

  clientePorId(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.API}/${id}`);
  }



  atualizarUsuarioLogado(novosDados: Customer): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(novosDados));
  }

  excluirCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }


  loginCliente(email: string, password: string): Observable<Customer | null> {
    const url = `http://localhost:3000/customers?email=${email}&password=${password}`;
    return this.http.get<Customer[]>(url).pipe(
      map(customers => customers.length > 0 ? customers[0] : null)
    );
  }

  setUsuarioLogado(customer: Customer) {
    this.usuarioLogado = customer;
  }

  getUsuarioLogado(): Customer | null {
    const usuario = localStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
  }

}
