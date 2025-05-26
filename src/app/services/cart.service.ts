import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './types/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  constructor() {
    this.loadCart();
    this.updateCartCount();
  }

  addToCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantidade += 1;
    } else {
      const item: CartItem = {
        id: product.id,
        nome: product.name,
        preco: product.value,
        imagem: product.image,
        quantidade: 1,
        selecionado: true
      };
      this.items.push(item);
    }

    this.saveCart();
    this.updateCartCount();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.saveCart();
    this.updateCartCount();
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cartItems');
    this.updateCartCount();
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

  
  private updateCartCount() {
    const total = this.items.reduce((sum, item) => sum + item.quantidade, 0);
    this.cartCount.next(total);
  }
}