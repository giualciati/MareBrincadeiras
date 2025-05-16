import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductService } from "../../core/services/product.service";
import { Product } from "../../models/product";
import { FavoritosService } from "../../favoritos.service";

@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"]
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
  produto!: Product;
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 1;
  pages: number[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const pageParam = params["page"];
      this.currentPage = pageParam ? Number(pageParam) : 1;
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.totalPages = this.productService.getTotalPages(this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    if (this.currentPage < 1) {
      this.currentPage = 1;
    } else if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    this.products = this.productService.getProductsByPage(this.currentPage, this.itemsPerPage);
    console.log(`Carregados ${this.products.length} produtos da página ${this.currentPage}`);
  }

  goToPage(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: "merge"
      });
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  toggleFavorite(event: Event, product: Product): void {
    event.preventDefault();
  
    
    if (product.isFavorite) {
      this.favoritosService.remover(Number(product.id));

    } else {
      this.favoritosService.adicionar(product);
    }
  
    product.isFavorite = !product.isFavorite;
  }
  

}










