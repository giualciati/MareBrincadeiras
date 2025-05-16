import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import type { Product } from "../../models/product";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isFavorite: boolean = false;
  @Output() favoriteToggled = new EventEmitter<{ event: Event; product: Product }>();


  constructor(private router: Router) {}

  toggleFavorite(event: Event, product: Product): void {
    event.preventDefault();
   this.favoriteToggled.emit({ event, product: this.product });
   }

  viewProduct(event: Event, productId: string): void {
    event.preventDefault();
    console.log("View product clicked for ID:", productId);
    
  }
}






