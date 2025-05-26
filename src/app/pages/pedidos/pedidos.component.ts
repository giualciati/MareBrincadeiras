import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common'; 
import { Venda, VendaService } from '../../services/venda.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos: Venda[] = [];

  constructor(private vendaService: VendaService) {}

  ngOnInit(): void {
    this.vendaService.listarVendas().subscribe((vendas) => {
      this.pedidos = vendas;
    });
  }
}