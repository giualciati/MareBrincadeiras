import { Injectable } from '@angular/core';
import { CartItem } from './types/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  addToCart(product: any) {
    const item: CartItem = {
      id: product.id,
      nome: product.name,
      preco: product.value,
      imagem: product.image,
      quantidade: 1,
      selecionado: true
    };
    this.items.push(item);
    this.saveCart();
  }

  getItems() {
    return this.items;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  private loadCart() {
    const data = localStorage.getItem('cartItems');
    if (data) {
      this.items = JSON.parse(data);
    }
  }
}