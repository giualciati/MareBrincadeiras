import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterLink } from "@angular/router"
import { ProductService } from "../../core/services/product.service"
import { Product, Feedback } from "../../services/types/product"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"

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
  selectedImage = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id") || ""
      console.log("Product ID from route:", productId)

      this.loading = true
      this.error = false

      // Obter o produto pelo ID
      const product = this.productService.getProductById(Number(productId))

      if (product) {
        this.product = product
        this.selectedImage = product.image // Inicializa com a imagem principal
        console.log("Product found:", this.product)

        // Obter feedbacks do produto
        this.feedbacks = product.feedbacks || []
        console.log("Feedbacks loaded:", this.feedbacks.length)

        // Obter produtos relacionados
        this.relatedProducts = this.productService.getRelatedProducts(Number(productId))
        console.log("Related products:", this.relatedProducts.length)
        this.loading = false
      } else {
        console.error("Product not found with ID:", productId)
        this.error = true
        this.loading = false
      }
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
