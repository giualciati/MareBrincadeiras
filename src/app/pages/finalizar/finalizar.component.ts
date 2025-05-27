import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvaliacoesService } from '../../services/avaliacoes.service';
import { HeaderComponent } from "../../components/header/header.component";
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/types/product';

@Component({
  selector: 'app-finalizar',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.scss']
})
export class FinalizarComponent {
  mostrarModal = false;

  avaliacao = {
    cliente: '',
    produto: '',
    rating: 0,
    comentario: '',
    data: new Date().toISOString().split('T')[0]
  };

  constructor(
    private avaliacoesService: AvaliacoesService,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  abrirModal() {
    this.mostrarModal = true;
    this.avaliacao.cliente = this.authService.getNomeUsuario();

    const produtoId = localStorage.getItem('produtoCompradoId');
    if (produtoId) {
      this.productService.buscarPorId(+produtoId).subscribe({
        next: (produto: Product) => {
          this.avaliacao.produto = produto.name;
        },
        error: () => {
          this.avaliacao.produto = 'Produto não encontrado';
        }
      });
    } else {
      this.avaliacao.produto = 'Produto não identificado';
    }
  }

  fecharModal() {
    this.mostrarModal = false;
    this.avaliacao = {
      cliente: '',
      produto: '',
      rating: 0,
      comentario: '',
      data: new Date().toISOString().split('T')[0]
    };
  }

  enviarAvaliacao() {
    this.avaliacao.data = new Date().toISOString().split('T')[0];

    this.avaliacoesService.criar({
      cliente: this.avaliacao.cliente,
      produto: this.avaliacao.produto,
      rating: this.avaliacao.rating,
      comentario: this.avaliacao.comentario,
      data: this.avaliacao.data
    }).subscribe(() => {
      console.log('Avaliação enviada com sucesso!');
      this.fecharModal();
    }, error => {
      console.error('Erro ao enviar avaliação:', error);
    });
  }
}