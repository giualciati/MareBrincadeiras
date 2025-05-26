import { Component } from '@angular/core';
import { VendaService, Venda } from '../../services/venda.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorio-vendas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './relatorio-vendas.component.html',
  styleUrls: ['./relatorio-vendas.component.scss']
})
export class RelatorioVendasComponent {
  vendas$: Observable<Venda[]>;

  constructor(private vendaService: VendaService) {
    this.vendas$ = this.vendaService.listarVendas();
  }
}
