import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductService } from '../../core/services/product.service'; // 👈 Importar o serviço

@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [CommonModule, ProductCardComponent, HeaderComponent, FooterComponent],
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {} // 👈 Tipo correto

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    console.log("Produtos carregados:", this.products.length);
  }
}
