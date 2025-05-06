import { Component, Input } from "@angular/core"
import { RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"
import type { Product } from "../../models/product"



@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product!: Product

  toggleFavorite(event: Event): void {
    event.preventDefault()
    this.product.isFavorite = !this.product.isFavorite
    console.log("Product favorite toggled:", this.product.id, this.product.isFavorite)
  }

  viewProduct(event: Event, productId: string): void {
    console.log("View product clicked for ID:", productId)
  }
}
