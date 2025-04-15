export interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  discount?: number
  imageUrl: string
  description: string
  isFavorite: boolean
}
