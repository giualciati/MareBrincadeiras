import { Component, Input } from "@angular/core";
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Product } from "../../services/types/product";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router) { }

  toggleFavorite(event: Event): void {
    event.preventDefault();
    this.product.isFavorite = !this.product.isFavorite;
    console.log("Product favorite toggled:", this.product.id, this.product.isFavorite);
  }

  viewProduct(event: Event, productId: number): void {
    event.preventDefault();
    this.router.navigate(["/product", productId]);
  }


}
