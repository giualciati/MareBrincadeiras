import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private brinquedos = [
    {
      nome: 'Brinquedo de Construção',
      descricao: 'Um conjunto de peças para montar diversas formas e estruturas.',
      imagem: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Boneca Fashion',
      descricao: 'Boneca estilosa com roupas e acessórios modernos.',
      imagem: 'https://via.placeholder.com/150'
    },
    {
      nome: 'Carrinho de Controle Remoto',
      descricao: 'Carrinho veloz para diversão a qualquer hora.',
      imagem: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  getFavoritos() {
    return this.brinquedos;
  }
}
