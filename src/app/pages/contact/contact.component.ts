import { Component, AfterViewInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements AfterViewInit {
  showNotification = false

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const el = document.getElementById(fragment)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    })

    // Verificar se há um parâmetro de seção para exibir as perguntas frequentes
    this.route.queryParams.subscribe((params) => {
      if (params["section"] === "faq") {
        const faqSection = document.getElementById("faq-section")
        if (faqSection) {
          setTimeout(() => {
            faqSection.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    })
  }

  formData = {
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  }

  faqItems = [
    {
      pergunta: "Qual é o prazo de entrega dos produtos?",
      resposta:
        "O prazo de entrega varia de acordo com a sua localização. Geralmente, entregamos em capitais e regiões metropolitanas em até 3 dias úteis. Para demais localidades, o prazo pode ser de até 7 dias úteis.",
      expanded: false,
    },
    {
      pergunta: "Como funciona a política de trocas e devoluções?",
      resposta:
        "Você pode solicitar a troca ou devolução em até 7 dias após o recebimento do produto. O item deve estar em perfeito estado, na embalagem original e com todos os acessórios. Para iniciar o processo, entre em contato com nosso atendimento.",
      expanded: false,
    },
    {
      pergunta: "Os brinquedos possuem certificação de segurança?",
      resposta:
        "Sim, todos os nossos produtos possuem certificação do INMETRO e seguem rigorosos padrões de segurança nacionais e internacionais. Utilizamos materiais atóxicos e realizamos testes constantes para garantir a segurança das crianças.",
      expanded: false,
    },
    {
      pergunta: "Vocês oferecem frete grátis?",
      resposta:
        "Sim! Oferecemos frete grátis para compras acima de R$ 250,00 para todo o Brasil. Promoções especiais podem oferecer frete grátis com valores menores em datas comemorativas.",
      expanded: false,
    },
    {
      pergunta: "Quais são as formas de pagamento aceitas?",
      resposta:
        "Aceitamos cartões de crédito (parcelamento em até 12x), cartões de débito, boleto bancário, PIX e transferência bancária. Para compras no cartão, trabalhamos com todas as bandeiras principais.",
      expanded: false,
    },
  ]

  toggleFaq(index: number): void {
    this.faqItems[index].expanded = !this.faqItems[index].expanded
  }

  enviarFormulario(): void {
    console.log("Formulário enviado:", this.formData)

    // Mostrar a notificação em vez do alert
    this.showNotification = true

    // Limpar o formulário
    this.formData = {
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    }
  }

  closeNotification(): void {
    this.showNotification = false
  }
}
