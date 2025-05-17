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
}
