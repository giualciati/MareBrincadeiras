import { Injectable } from '@angular/core';
import { Venda } from './types/venda';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private vendas: Venda[] = [];

  constructor() {
    this.loadVendas();
  }

  adicionarVenda(venda: Venda): void {
    this.vendas.push(venda);
    this.saveVendas();
  }

  listarVendas(): Observable<Venda[]> {
    return of(this.vendas);
  }

  limparVendas(): void {
    this.vendas = [];
    localStorage.removeItem('vendas');
  }

  
  private saveVendas(): void {
    localStorage.setItem('vendas', JSON.stringify(this.vendas));
  }

  private loadVendas(): void {
    const dados = localStorage.getItem('vendas');
    if (dados) {
      this.vendas = JSON.parse(dados);
    }
  }
}

export type { Venda };