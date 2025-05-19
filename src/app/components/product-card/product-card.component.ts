import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"
import { CommonModule } from "@angular/common"
import { Product } from "../../services/types/product"
import { FavoritosService } from "../../favoritos.service"

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product!: Product

  constructor(
    private router: Router,
    private favoritosService: FavoritosService,
  ) { }

  toggleFavorite(event: Event): void {
    event.preventDefault()
    this.product.isFavorite = !this.product.isFavorite

    if (this.product.isFavorite) {
      this.favoritosService.adicionar(this.product)
    } else {
      this.favoritosService.remover(this.product.id)
    }

    console.log("Product favorite toggled:", this.product.id, this.product.isFavorite)
  }

  viewProduct(event: Event, productId: number): void {
    event.preventDefault()
    this.router.navigate(["/product", productId])
  }
}
