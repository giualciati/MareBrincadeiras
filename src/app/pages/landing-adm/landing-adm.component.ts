import { Component, OnInit } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";
import { RelatorioVendasComponent } from "../../components/relatorio-vendas/relatorio-vendas.component";
import { VendaService, Venda } from '../../services/venda.service';
import { ProductService } from '../../services/product.service';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-landing-adm',
  standalone: true,
  imports: [SidebarManagementComponent, RelatorioVendasComponent],
  templateUrl: './landing-adm.component.html',
  styleUrls: ['./landing-adm.component.scss']
})
export class LandingAdmComponent implements OnInit {

  totalVendas: number = 0;
  totalProdutos: number = 0;
  totalClientes: number = 0; // nova propriedade para clientes

  constructor(
    private vendaService: VendaService,
    private productService: ProductService,
    private customersService: CustomersService // importado o serviço
  ) {}

  ngOnInit(): void {
    this.vendaService.listarVendas().subscribe((vendas: Venda[]) => {
      this.totalVendas = vendas.length;
    });

    this.productService.listarProduto().subscribe(produtos => {
      this.totalProdutos = produtos.length;
    });

    this.customersService.listarCliente().subscribe(clientes => {
      this.totalClientes = clientes.length;
    });
  }
}