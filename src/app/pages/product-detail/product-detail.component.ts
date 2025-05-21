import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterLink } from "@angular/router"
import { ProductService } from "../../core/services/product.service"
import { Product, Feedback } from "../../services/types/product"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { FavoritosService } from "../../favoritos.service"

@Component({
  selector: "app-product-detail",
  standalone: true,
  imports: [CommonModule, ProductCardComponent, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined
  relatedProducts: Product[] = []
  feedbacks: Feedback[] = []
  activeTab = "description"
  quantity = 1
  loading = true
  error = false
  errorMessage = "Não foi possível carregar o produto."
  selectedImage = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private favoritosService: FavoritosService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)

    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id") || ""
      console.log("Product ID from route:", productId)

      this.loading = true
      this.error = false

      // Obter o produto pelo ID da API
      this.productService.getProductById(Number(productId)).subscribe({
        next: (product) => {
          if (product) {
            this.product = product
            this.selectedImage = product.image // Inicializa com a imagem principal
            console.log("Product found:", this.product)

            // Obter feedbacks do produto
            this.feedbacks = product.feedbacks || []
            console.log("Feedbacks loaded:", this.feedbacks.length)

            // Buscar produtos relacionados
            // Podemos buscar produtos da mesma categoria
            this.productService.getProducts().subscribe({
              next: (products) => {
                // Filtrar produtos da mesma categoria, excluindo o produto atual
                this.relatedProducts = products
                  .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
                  .slice(0, 4) // Limitar a 4 produtos relacionados

                console.log("Related products:", this.relatedProducts.length)
              },
              error: (error) => {
                console.error("Error loading related products:", error)
              },
            })

            this.loading = false
          } else {
            console.error("Product not found with ID:", productId)
            this.error = true
            this.errorMessage = "Produto não encontrado."
            this.loading = false
          }
        },
        error: (error) => {
          console.error("Error loading product:", error)
          this.error = true
          this.errorMessage = "Erro ao carregar o produto. Por favor, tente novamente mais tarde."
          this.loading = false
        },
      })
    })
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--
    }
  }

  increaseQuantity(): void {
    if (this.product && this.quantity < this.product.quantity) {
      this.quantity++
    }
  }

  toggleFavorite(): void {
    if (this.product) {
      this.product.isFavorite = !this.product.isFavorite

      if (this.product.isFavorite) {
        this.favoritosService.adicionar(this.product)
      } else {
        this.favoritosService.remover(this.product.id)
      }
    }
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "numeric", day: "numeric" }
    return new Date(dateString).toLocaleDateString("pt-BR", options)
  }

  changeImage(image: string): void {
    this.selectedImage = image
  }

  isInStock(): boolean {
    return this.product ? this.product.quantity > 0 : false
  }

  isLowStock(): boolean {
    return this.product ? this.product.quantity > 0 && this.product.quantity < 5 : false
  }
}
