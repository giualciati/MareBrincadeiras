import { Component } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";
import { RelatorioVendasComponent } from "../../components/relatorio-vendas/relatorio-vendas.component";

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [SidebarManagementComponent, RelatorioVendasComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {

}
