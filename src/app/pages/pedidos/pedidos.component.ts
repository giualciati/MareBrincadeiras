import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {

}
