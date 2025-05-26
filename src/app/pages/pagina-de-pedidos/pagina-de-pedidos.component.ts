import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common'; 
import { VendaService } from '../../services/venda.service';
import { AuthService } from '../../services/auth.service';  

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
  usuarioLogadoNome: string = 'Cliente'; 
  enderecoSelecionado: any = null; 

  constructor(
    private router: Router,
    private vendaService: VendaService,
    private authService: AuthService  
  ) {
    const dados = localStorage.getItem('endereco');
    const enderecos = dados ? JSON.parse(dados) : [];

    if (enderecos.length > 0) {
      this.enderecoSelecionado = enderecos[enderecos.length - 1]; 
    } else {
      this.enderecoSelecionado = null;
    }

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

    const usuario = this.authService.getUsuarioLogado();
    if (usuario && usuario.name) {
      this.usuarioLogadoNome = usuario.name;
    }

    console.log('Produtos recebidos na página de pedidos:', this.produtos);
  }
 
  get totalProdutos(): number {
    return this.produtos.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0);
  }

  get pagamentoTotal(): number {
    return this.totalProdutos + this.frete;
  }

  finalizarCompra() {
    const novaVenda = {
      id: Date.now(),
      nomeCliente: this.usuarioLogadoNome,
      data: new Date().toLocaleDateString(),
      produtos: this.produtos,  
      valorTotal: this.pagamentoTotal,
      frete: this.frete          
    };

    this.vendaService.adicionarVenda(novaVenda);

    sessionStorage.removeItem('produtos');

    this.router.navigate(['/finish']); 
  }
}
