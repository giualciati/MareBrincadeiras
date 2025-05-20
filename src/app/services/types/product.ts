export interface Feedback {
  name: string
  rating: number
  date: string
  comment: string
}

export interface Product {
  id: number
  name: string
  description: string
  categoryId: number
  color: string
  size: string
  value: number
  quantity: number
  image: string
  images: string[]
  oldValue?: number
  discount?: number
  isFavorite?: boolean
  feedbacks?: Feedback[]
  // Novos campos para filtros avançados
  ageRange?: string // Ex: "0-12 meses", "1-3 anos", "4-6 anos", etc.
  brand?: string // Ex: "Mattel", "Lego", "Hasbro", etc.
  toyType?: string[] // Ex: ["Educativo", "Criativo", "Ao ar livre"]
}
