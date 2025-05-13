import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  items = [
    {
      nome: 'Casa de Atividades',
      preco: 199.90,
      quantidade: 1,
      imagem: 'assets/img/cd7d6395-de7a-4032-bf55-3171ddae75cc.png',
      selecionado: false
    },
    {
      nome: 'Grande conjunto de presente',
      preco: 375.00,
      quantidade: 1,
      imagem: 'assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png',
      selecionado: false
    },
    {
      nome: 'Conjunto de chocalhos de madeira',
      preco: 370.00,
      quantidade: 1,
      imagem: 'assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png',
      selecionado: false
    }
  ];

  selectAll = false;
  subtotal = 0;

  alterarQuantidade(index: number, delta: number): void {
    const item = this.items[index];
    item.quantidade = Math.max(1, item.quantidade + delta);
    this.atualizarSubtotal();
  }

  removerItem(index: number): void {
    this.items.splice(index, 1);
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
  
}

  