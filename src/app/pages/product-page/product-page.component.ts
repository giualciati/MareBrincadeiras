import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { ProductService } from "../../core/services/product.service"
import { Product } from "../../services/types/product"
import { FavoritosService } from "../../favoritos.service"

@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, HeaderComponent, FooterComponent],
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  products: Product[] = []
  allProducts: Product[] = []
  filteredProducts: Product[] = []
  displayedProducts: Product[] = []
  produto!: Product
  currentPage = 1
  itemsPerPage = 8
  totalPages = 1
  pages: number[] = []

  searchTerm = ""

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritosService: FavoritosService,
  ) { }

  ngOnInit(): void {

    this.allProducts = this.productService.getAllProducts()

    this.route.queryParams.subscribe((params) => {
      const pageParam = params["page"]
      const searchParam = params["search"]

      this.currentPage = pageParam ? Number(pageParam) : 1

      if (searchParam) {
        this.searchTerm = searchParam
        this.filterProducts()
      } else {
        this.loadProducts()
      }
    })
  }

  loadProducts(): void {

    this.filteredProducts = this.allProducts
    this.updatePagination()
    this.updateDisplayedProducts()
  }

  filterProducts(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = this.allProducts
    } else {
      const searchTermLower = this.searchTerm.toLowerCase().trim()

      this.filteredProducts = this.allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTermLower) ||
          (product.description && product.description.toLowerCase().includes(searchTermLower)),
      )
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.searchTerm || null,
        page: 1,
      },
      queryParamsHandling: "merge",
    })

    this.currentPage = 1
    this.updatePagination()
    this.updateDisplayedProducts()
  }

  clearSearch(): void {
    this.searchTerm = ""
    this.filterProducts()
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage)
    this.totalPages = this.totalPages === 0 ? 1 : this.totalPages
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1)

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages
    }
  }

  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex)
  }

  goToPage(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.currentPage = page

      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: "merge",
      })

      this.updateDisplayedProducts()
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

  toggleFavorite(event: Event, product: Product): void {
    event.preventDefault()

    if (product.isFavorite) {
      this.favoritosService.remover(Number(product.id))
    } else {
      this.favoritosService.adicionar(product)
    }

    product.isFavorite = !product.isFavorite
  }
}
