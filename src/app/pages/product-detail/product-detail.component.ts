import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterLink } from "@angular/router"
import { ProductService } from "../../core/services/product.service"
import { FeedbackService } from "../../core/services/feedback.service"
import type { Feedback } from "../../core/services/feedback.service"
import type { Product } from "../../models/product"
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private feedbackService: FeedbackService,
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id") || ""
      console.log("Product ID:", productId)

      // Obter o produto diretamente
      this.product = this.productService.getProductById(productId)
      console.log("Product found:", this.product)

      // Se o produto não for encontrado, redirecionar para a lista de produtos
      if (!this.product) {
        console.error("Product not found with ID:", productId)
        this.router.navigate(["/produtos"])
        return
      }

      // Obter produtos relacionados
      this.relatedProducts = this.productService.getRelatedProducts(productId)

      // Obter feedback
      this.feedbackService.getFeedbackForProduct(productId).subscribe((feedbacks) => {
        this.feedbacks = feedbacks
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
    this.quantity++
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
}