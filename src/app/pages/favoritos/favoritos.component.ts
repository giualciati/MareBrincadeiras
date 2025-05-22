import { Component, OnInit } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { FavoritosService } from "../../favoritos.service"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { Product } from "../../services/types/product"

@Component({
  selector: "app-favoritos",
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, CommonModule, ProductCardComponent],
  templateUrl: "./favoritos.component.html",
  styleUrls: ["./favoritos.component.scss"],
})
export class FavoritosComponent implements OnInit {
  favoritos: Product[] = []

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.carregarFavoritos()
  }

  carregarFavoritos() {
    this.favoritos = this.favoritosService.listar()
    console.log("Favoritos carregados:", this.favoritos.length)
  }

  removerFavorito(id: number) {
    console.log("Removendo favorito com ID:", id)
    this.favoritosService.remover(id)
    this.carregarFavoritos()
  }
}
