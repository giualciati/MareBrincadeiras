import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router, RouterLink } from "@angular/router"
import { ProductService } from "../../core/services/product.service"
import { Product, Feedback } from "../../models/product"
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
  ) {}

  ngOnInit(): void {
    // Adicionar log para depuração
    console.log("ProductDetailComponent initialized")

    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id") || ""
      console.log("Product ID from route:", productId)

      // Obter o produto diretamente
      this.product = this.productService.getProductById(productId)
      console.log("Product found:", this.product)

      // Se o produto não for encontrado, redirecionar para a lista de produtos
      if (!this.product) {
        console.error("Product not found with ID:", productId)
        this.router.navigate(["/produtos"])
        return
      }

      // Obter feedbacks do produto
      this.feedbacks = this.product.feedbacks
      console.log("Feedbacks loaded:", this.feedbacks.length)

      // Obter produtos relacionados
      this.relatedProducts = this.productService.getRelatedProducts(productId)
      console.log("Related products:", this.relatedProducts.length)
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
