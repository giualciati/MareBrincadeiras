export interface Feedback {
  name: string
  rating: number
  date: string
  comment: string
}

export interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  discount?: number
  imageUrl: string
  description: string
  isFavorite: boolean
  feedbacks: Feedback[]
}
