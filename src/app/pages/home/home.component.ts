import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { ProductService } from "../../core/services/product.service"
import { Product } from "../../services/types/product"
import { ToastModule } from "primeng/toast"
import { MessageService } from "primeng/api"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ProductCardComponent, HeaderComponent, FooterComponent, ToastModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  products: Product[] = []
  bestSellers: Product[] = []
  countdown = {
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59,
  }
  isFinished = false
  countdownInterval: any
  carouselPosition = 0
  newsletterEmail = ""
  isLoading = true

  // Depoimentos
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Comprei vários brinquedos educativos para meu filho de 4 anos e ele adorou! A qualidade é excelente e o atendimento foi impecável. Recomendo a todos os pais!",
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      location: "Rio de Janeiro, RJ",
      rating: 4,
      text: "Minha filha ficou encantada com a boneca que comprei. A entrega foi rápida e o produto chegou em perfeito estado. Certamente voltarei a comprar!",
    },
    {
      id: 3,
      name: "Mariana Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Os brinquedos para bebê são de excelente qualidade e seguros. Meu bebê de 8 meses adora os chocalhos coloridos. O preço é justo pela qualidade oferecida.",
    },
  ]

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true

    // Buscar produtos da API
    this.productService.getProducts().subscribe({
      next: (products) => {
        // Obter produtos em destaque (primeiros 8 produtos)
        this.products = products.slice(0, 4)
        console.log("Produtos em destaque carregados:", this.products.length)

        // Obter produtos mais vendidos (usando os mesmos produtos para demonstração)
        this.bestSellers = products.slice(0, 8)

        this.isLoading = false
      },
      error: (error) => {
        console.error("Erro ao carregar produtos:", error)
        this.isLoading = false
        this.messageService.add({
          severity: "error",
          summary: "Erro",
          detail: "Não foi possível carregar os produtos. Tente novamente mais tarde.",
          life: 3000,
        })
      },
    })

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

  // Controle do carrossel
  moveCarousel(direction: "prev" | "next"): void {
    const itemWidth = 300 // Largura aproximada de cada item + margem
    const visibleItems = window.innerWidth > 1200 ? 4 : window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1
    const maxPosition = -(this.bestSellers.length - visibleItems) * itemWidth

    if (direction === "prev") {
      this.carouselPosition = Math.min(this.carouselPosition + itemWidth, 0)
    } else {
      this.carouselPosition = Math.max(this.carouselPosition - itemWidth, maxPosition)
    }
  }

  // Inscrição na newsletter com toast
  subscribeNewsletter(): void {
    if (this.newsletterEmail) {
      // Aqui você implementaria a lógica para salvar o email
      console.log("Email cadastrado na newsletter:", this.newsletterEmail)

      // Exibir toast de sucesso
      this.messageService.add({
        severity: "success",
        summary: "Inscrição realizada",
        detail: "Obrigado por se inscrever em nossa newsletter!",
        life: 3000,
      })

      this.newsletterEmail = ""
    } else {
      // Exibir toast de aviso se o email estiver vazio
      this.messageService.add({
        severity: "warn",
        summary: "Campo obrigatório",
        detail: "Por favor, informe seu e-mail para se inscrever.",
        life: 3000,
      })
    }
  }
}
