import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { ProductService } from "../../core/services/product.service"
import { Product } from "../../services/types/product"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, HeaderComponent, FooterComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: Product[] = []
  countdown = {
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  }
  isFinished = false
  countdownInterval: any

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Obter produtos em destaque diretamente do serviço
    this.products = this.productService.getFeaturedProducts()
    console.log("Produtos em destaque carregados:", this.products.length)

    this.startCountdown()
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval)
    }
  }

  startCountdown(): void {
    let totalSeconds =
      this.countdown.days * 24 * 60 * 60 +
      this.countdown.hours * 60 * 60 +
      this.countdown.minutes * 60 +
      this.countdown.seconds

    this.countdownInterval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(this.countdownInterval)
        this.isFinished = true
        return
      }

      totalSeconds--
      this.countdown.days = Math.floor(totalSeconds / (24 * 60 * 60))
      this.countdown.hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))
      this.countdown.minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
      this.countdown.seconds = totalSeconds % 60
    }, 1000)
  }
}
