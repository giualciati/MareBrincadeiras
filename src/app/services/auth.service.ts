import { Injectable } from '@angular/core';

export interface Usuario {
  id?: number;
  name?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'usuarioLogado';

  constructor() {}

  getUsuarioLogado(): Usuario | null {
    const usuarioJson = localStorage.getItem(this.storageKey);
    if (!usuarioJson) return null;

    try {
      return JSON.parse(usuarioJson) as Usuario;
    } catch {
      return null;
    }
  }


  getNomeUsuario(): string {
    const usuario = this.getUsuarioLogado();
    return usuario?.name || 'Cliente não identificado';
  }


  setUsuarioLogado(usuario: Usuario): void {
    localStorage.setItem(this.storageKey, JSON.stringify(usuario));
  }

 
  logout(): void {
    localStorage.removeItem(this.storageKey);
  }


  isLoggedIn(): boolean {
    return this.getUsuarioLogado() !== null;
  }
}