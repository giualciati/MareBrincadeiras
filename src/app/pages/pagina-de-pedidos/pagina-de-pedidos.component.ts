import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-pagina-de-pedidos',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './pagina-de-pedidos.component.html',
  styleUrls: ['./pagina-de-pedidos.component.scss']
})
export class PaginaDePedidosComponent {
  
}
