import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-pagina-de-pedidos',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
  templateUrl: './pagina-de-pedidos.component.html',
  styleUrls: ['./pagina-de-pedidos.component.scss']
})
export class PaginaDePedidosComponent {
  produtos: any[] = [];
  frete: number = 23.87;  

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  
    if (navigation?.extras?.state?.['produtos']) {
      this.produtos = navigation.extras.state['produtos'];
      sessionStorage.setItem('produtos', JSON.stringify(this.produtos));
    } else {
      const produtosSalvos = sessionStorage.getItem('produtos');
      if (produtosSalvos) {
        this.produtos = JSON.parse(produtosSalvos);
      } else {
        this.produtos = [];
      }
    }

    console.log('Produtos recebidos na página de pedidos:', this.produtos);
  }
 
  get totalProdutos(): number {
    return this.produtos.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);
  }

  get pagamentoTotal(): number {
    return this.totalProdutos + this.frete;
  }
}

