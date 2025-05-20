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
  itemsPerPage = 15
  totalPages = 1
  pages: number[] = []

  searchTerm = ""

  // Filtros avançados
  ageRanges: string[] = ["0-12 meses", "1-3 anos", "4-6 anos", "7-9 anos", "10-12 anos"]
  selectedAgeRanges: string[] = []

  minPrice = 0
  maxPrice = 1000
  priceRange: [number, number] = [0, 1000]

  toyTypes: string[] = [
    "Educativo",
    "Criativo",
    "Ao ar livre",
    "Eletrônico",
    "Quebra-cabeça",
    "Bonecas",
    "Carrinhos",
    "Jogos de tabuleiro",
    "Pelúcias",
    "Construção",
  ]
  selectedToyTypes: string[] = []

  brands: string[] = [
    "Mattel",
    "Lego",
    "Hasbro",
    "Fisher-Price",
    "Playmobil",
    "Candide",
    "Estrela",
    "Grow",
    "Brinquedos Bandeirante",
  ]
  selectedBrands: string[] = []

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritosService: FavoritosService,
  ) { }

  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts()

    if (this.allProducts.length > 0) {
      this.minPrice = Math.min(...this.allProducts.map((p) => p.value))
      this.maxPrice = Math.max(...this.allProducts.map((p) => p.value))
      this.priceRange = [this.minPrice, this.maxPrice]
    }

    // Primeiro carregamos todos os produtos sem filtros
    this.loadProducts()

    // Depois verificamos os parâmetros da URL
    this.route.queryParams.subscribe((params) => {
      const pageParam = params["page"]
      const searchParam = params["search"]

      // Apenas aplicamos a página e o termo de busca, não os filtros automaticamente
      this.currentPage = pageParam ? Number(pageParam) : 1

      if (searchParam) {
        this.searchTerm = searchParam
        this.filterProducts()
      } else {
        // Se não houver termo de busca, apenas atualizamos a exibição com base na página atual
        this.updateDisplayedProducts()
      }
    })
  }

  loadProducts(): void {
    this.filteredProducts = this.allProducts
    this.updatePagination()
    this.updateDisplayedProducts()
  }

  filterProducts(): void {
    let filtered = this.allProducts

    if (this.searchTerm.trim()) {
      const searchTermLower = this.searchTerm.toLowerCase().trim()
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTermLower) ||
          (product.description && product.description.toLowerCase().includes(searchTermLower)),
      )
    }

    if (this.selectedAgeRanges.length > 0) {
      filtered = filtered.filter((product) => product.ageRange && this.selectedAgeRanges.includes(product.ageRange))
    }

    filtered = filtered.filter((product) => product.value >= this.priceRange[0] && product.value <= this.priceRange[1])

    if (this.selectedToyTypes.length > 0) {
      filtered = filtered.filter(
        (product) => product.toyType && product.toyType.some((type) => this.selectedToyTypes.includes(type)),
      )
    }

    if (this.selectedBrands.length > 0) {
      filtered = filtered.filter((product) => product.brand && this.selectedBrands.includes(product.brand))
    }

    this.filteredProducts = filtered

    // Só atualizamos a URL com filtros quando o usuário aplica filtros explicitamente
    if (this.isAnyFilterActive() || this.searchTerm) {
      this.updateUrlWithFilters()
    }

    this.currentPage = 1
    this.updatePagination()
    this.updateDisplayedProducts()
  }

  updateUrlWithFilters(): void {
    const queryParams: any = {}

    if (this.searchTerm) {
      queryParams.search = this.searchTerm
    }

    if (this.selectedAgeRanges.length > 0) {
      queryParams.ageRanges = this.selectedAgeRanges.join(",")
    }

    if (this.priceRange[0] !== this.minPrice || this.priceRange[1] !== this.maxPrice) {
      queryParams.priceMin = this.priceRange[0]
      queryParams.priceMax = this.priceRange[1]
    }

    if (this.selectedToyTypes.length > 0) {
      queryParams.toyTypes = this.selectedToyTypes.join(",")
    }

    if (this.selectedBrands.length > 0) {
      queryParams.brands = this.selectedBrands.join(",")
    }

    // Adicionamos a página atual
    if (this.currentPage > 1) {
      queryParams.page = this.currentPage
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      // Não usamos merge para evitar manter parâmetros antigos
      replaceUrl: true,
    })
  }

  clearSearch(): void {
    this.searchTerm = ""
    this.filterProducts()
  }

  toggleAgeRange(age: string): void {
    if (this.selectedAgeRanges.includes(age)) {
      this.selectedAgeRanges = this.selectedAgeRanges.filter((a) => a !== age)
    } else {
      this.selectedAgeRanges.push(age)
    }
    this.filterProducts()
  }

  toggleToyType(type: string): void {
    if (this.selectedToyTypes.includes(type)) {
      this.selectedToyTypes = this.selectedToyTypes.filter((t) => t !== type)
    } else {
      this.selectedToyTypes.push(type)
    }
    this.filterProducts()
  }

  toggleBrand(brand: string): void {
    if (this.selectedBrands.includes(brand)) {
      this.selectedBrands = this.selectedBrands.filter((b) => b !== brand)
    } else {
      this.selectedBrands.push(brand)
    }
    this.filterProducts()
  }

  clearAllFilters(): void {
    this.selectedAgeRanges = []
    this.priceRange = [this.minPrice, this.maxPrice]
    this.selectedToyTypes = []
    this.selectedBrands = []
    this.filterProducts()
  }

  isAnyFilterActive(): boolean {
    return (
      this.selectedAgeRanges.length > 0 ||
      this.priceRange[0] !== this.minPrice ||
      this.priceRange[1] !== this.maxPrice ||
      this.selectedToyTypes.length > 0 ||
      this.selectedBrands.length > 0
    )
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

      // Apenas atualizamos o parâmetro de página, sem usar merge para evitar manter filtros não desejados
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
      })

      this.updateDisplayedProducts()
      window.scrollTo(0, 0) // Scroll para o topo ao mudar de página
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
