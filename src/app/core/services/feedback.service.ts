import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"

export interface Feedback {
  name: string
  rating: number
  date: string
  comment: string
}

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  private mockFeedback: Feedback[] = [
    {
      name: "Ana Silva",
      rating: 5,
      date: "2023-10-15",
      comment: "Meu filho adorou! Ótima qualidade e muito resistente. Recomendo para todas as idades.",
    },
    {
      name: "Carlos Oliveira",
      rating: 4,
      date: "2023-09-28",
      comment: "Produto bom, mas a montagem foi um pouco complicada. Depois de montado, as crianças não saem de cima.",
    },
    {
      name: "Mariana Costa",
      rating: 5,
      date: "2023-09-10",
      comment: "Excelente brinquedo para desenvolvimento motor. Minha filha de 3 anos brinca todos os dias.",
    },
    {
      name: "Pedro Santos",
      rating: 5,
      date: "2023-08-22",
      comment: "Comprei para meu sobrinho e ele adora! A estrutura é bem firme e segura.",
    },
    {
      name: "Juliana Mendes",
      rating: 4,
      date: "2023-08-05",
      comment: "Ótimo custo-benefício. As crianças se divertem muito e ajuda no desenvolvimento físico.",
    },
  ]

  constructor() {}

  getFeedbackForProduct(productId: string): Observable<Feedback[]> {
    return of(this.mockFeedback)
  }
}
