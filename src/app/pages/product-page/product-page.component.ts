import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterLink } from "@angular/router"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { ProductService } from "../../core/services/product.service"
import { Product } from "../../models/product"

@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [CommonModule, ProductCardComponent, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  products: Product[] = []
  currentPage = 1
  itemsPerPage = 8
  totalPages = 1
  pages: number[] = []

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Verificar se há um parâmetro de página na URL
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params["page"] ? Number.parseInt(params["page"]) : 1
      this.loadProducts()
    })
  }

  loadProducts(): void {
    // Obter o número total de páginas
    this.totalPages = this.productService.getTotalPages(this.itemsPerPage)

    // Criar array de páginas para navegação
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1)

    // Verificar se a página atual é válida
    if (this.currentPage < 1) {
      this.currentPage = 1
    } else if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages
    }

    // Carregar produtos da página atual
    this.products = this.productService.getProductsByPage(this.currentPage, this.itemsPerPage)
    console.log(`Carregados ${this.products.length} produtos da página ${this.currentPage}`)
  }

  goToPage(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: "merge",
      })
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1)
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1)
    }
  }
}
