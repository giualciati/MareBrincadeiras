import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FavoritosService } from '../../favoritos.service';
import { HeaderComponent } from '../../components/header/header.component';
import { Product } from "../../models/product";

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [RouterModule, HeaderComponent, CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  favoritos: Product[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.carregarFavoritos();
  }

  carregarFavoritos() {
    this.favoritos = this.favoritosService.listar();
  }

  removerFavorito(id: number) {
    this.favoritosService.remover(id);
    this.carregarFavoritos();
  }
}


