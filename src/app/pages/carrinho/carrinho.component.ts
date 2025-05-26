import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../services/types/cartItem';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, RouterModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  items: CartItem[] = [];
  selectAll = false;
  subtotal = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private authService: AuthService  // ✅ Injeta AuthService
  ) {}

  ngOnInit() {
    const usuario = this.authService.getUsuarioLogado();
    if (!usuario) {
      this.router.navigate(['/login/user']); 
      return;
    }

    this.items = this.cartService.getItems();
    this.atualizarSubtotal();
  }

  alterarQuantidade(index: number, delta: number): void {
    const item = this.items[index];
    item.quantidade += delta;

    if (item.quantidade < 1) {
      this.removerItem(index);
    } else {
      this.atualizarSubtotal();
    }
  }

  removerItem(index: number): void {
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
    this.atualizarSubtotal();
  }

  toggleSelectAll(): void {
    this.items.forEach(item => item.selecionado = this.selectAll);
    this.atualizarSubtotal();
  }

  atualizarSubtotal(): void {
    this.subtotal = this.items
      .filter(item => item.selecionado)
      .reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  toggleItemSelecionado(): void {
    this.selectAll = this.items.every(item => item.selecionado);
    this.atualizarSubtotal();
  }

  getQuantidadeSelecionada(): number {
    return this.items.filter(i => i.selecionado).length;
  }

  irParaPaginaDePedidos() {
    const produtosSelecionados = this.items.filter(item => item.selecionado);

    if (produtosSelecionados.length === 0) {
      alert('Selecione pelo menos um produto.');
      return;
    }

    this.router.navigate(['/pagina-de-pedidos'], { state: { produtos: produtosSelecionados } });

    
    this.cartService.clearCart();
    this.items = [];
    this.subtotal = 0;
  }
}