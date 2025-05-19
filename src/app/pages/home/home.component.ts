import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { ProductCardComponent } from "../../components/product-card/product-card.component"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { ProductService } from "../../core/services/product.service"
import { Product } from "../../services/types/product"

interface AgeGroup {
  id: number
  name: string
  image: string
}

interface Brand {
  id: number
  name: string
  logo: string
}

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
  imports: [CommonModule, RouterLink, FormsModule, ProductCardComponent, HeaderComponent, FooterComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
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

  // Grupos por idade
  ageGroups: AgeGroup[] = [
    {
      id: 1,
      name: "0 a 12 meses",
      image: "/placeholder.svg?height=180&width=300&query=baby+toys+0-12+months",
    },
    {
      id: 2,
      name: "1 a 3 anos",
      image: "/placeholder.svg?height=180&width=300&query=toddler+toys+1-3+years",
    },
    {
      id: 3,
      name: "4 a 6 anos",
      image: "/placeholder.svg?height=180&width=300&query=preschool+toys+4-6+years",
    },
    {
      id: 4,
      name: "7 a 12 anos",
      image: "/placeholder.svg?height=180&width=300&query=kids+toys+7-12+years",
    },
  ]

  // Marcas parceiras
  brands: Brand[] = [
    {
      id: 1,
      name: "Mattel",
      logo: "../../../assets/img/logos/MattelLogo.png",
    },
    {
      id: 2,
      name: "Lego",
      logo: "../../../assets/img/logos/LegoLogo.png",
    },
    {
      id: 3,
      name: "Hasbro",
      logo: "../../../assets/img/logos/HasbroLogo.png",
    },
    {
      id: 4,
      name: "Camdide",
      logo: "../../../assets/img/logos/CandideLogo.png",
    },
    {
      id: 5,
      name: "Playmobil",
      logo: "../../../assets/img/logos/PlaymobilLogo.svg.png",
    }
  ]

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

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Obter produtos em destaque
    this.products = this.productService.getFeaturedProducts()
    console.log("Produtos em destaque carregados:", this.products.length)

    // Obter produtos mais vendidos (usando os mesmos produtos para demonstração)
    this.bestSellers = [...this.productService.getAllProducts()].slice(0, 8)

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

  // Inscrição na newsletter
  subscribeNewsletter(): void {
    if (this.newsletterEmail) {
      // Aqui você implementaria a lógica para salvar o email
      console.log("Email cadastrado na newsletter:", this.newsletterEmail)
      alert("Obrigado por se inscrever em nossa newsletter!")
      this.newsletterEmail = ""
    }
  }
}
