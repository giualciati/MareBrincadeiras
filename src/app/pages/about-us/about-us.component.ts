import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"

interface Value {
  icon: string
  title: string
  description: string
}

@Component({
  selector: "app-about-us",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent {
  values: Value[] = [
    {
      icon: "fas fa-child",
      title: "Desenvolvimento Infantil",
      description:
        "Acreditamos que brincar é a forma mais natural de aprender. Nossos produtos são projetados para estimular habilidades cognitivas, motoras e socioemocionais.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Segurança em Primeiro Lugar",
      description:
        "Todos os nossos produtos passam por rigorosos testes de segurança, superando os padrões exigidos pela legislação. Utilizamos apenas materiais atóxicos e de alta qualidade.",
    },
    {
      icon: "fas fa-leaf",
      title: "Sustentabilidade",
      description:
        "Comprometidos com o futuro do planeta, utilizamos materiais sustentáveis e embalagens recicláveis. Nossos processos de produção visam minimizar o impacto ambiental.",
    },
    {
      icon: "fas fa-heart",
      title: "Inclusão",
      description:
        "Desenvolvemos brinquedos acessíveis para crianças com diferentes habilidades, garantindo que todas possam desfrutar de momentos de diversão e aprendizado.",
    },
  ]

  differentials: Value[] = [
    {
      icon: "fas fa-check-circle",
      title: "Produtos Testados e Aprovados",
      description:
        "Todos os nossos brinquedos passam por rigorosos testes de segurança e qualidade antes de chegarem às mãos das crianças.",
    },
    {
      icon: "fas fa-check-circle",
      title: "Desenvolvimento Baseado em Pesquisa",
      description:
        "Trabalhamos em parceria com pedagogos e psicólogos para criar produtos que realmente contribuam para o desenvolvimento infantil.",
    },
    {
      icon: "fas fa-check-circle",
      title: "Materiais Sustentáveis",
      description:
        "Utilizamos madeira de reflorestamento, tintas atóxicas e plásticos recicláveis em nossos produtos, minimizando o impacto ambiental.",
    },
    {
      icon: "fas fa-check-circle",
      title: "Atendimento Personalizado",
      description:
        "Nossa equipe está sempre pronta para ajudar você a encontrar o brinquedo ideal para cada fase do desenvolvimento da criança.",
    },
  ]
}
