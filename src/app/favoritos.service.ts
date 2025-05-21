import { Injectable } from "@angular/core"
import { CustomersService } from "./services/customers.service" // ajuste o caminho se precisar
import { Product } from "./services/types/product"

@Injectable({
  providedIn: "root",
})
export class FavoritosService {
  private favoritosKeyPrefix = "favoritos_"

  constructor(private customersService: CustomersService) { }

  private getUsuarioId(): string | null {
    const usuario = this.customersService.getUsuarioLogado()
    return usuario ? usuario.id.toString() : "guest" // Usar "guest" para usuários não logados
  }

  listar(): Product[] {
    const usuarioId = this.getUsuarioId()
    if (!usuarioId) return []

    const favoritosJson = localStorage.getItem(this.favoritosKeyPrefix + usuarioId)
    return favoritosJson ? JSON.parse(favoritosJson) : []
  }

  adicionar(product: Product): void {
    const usuarioId = this.getUsuarioId()
    if (!usuarioId) return

    const favoritos = this.listar()

    if (!favoritos.find((p) => p.id === product.id)) {
      favoritos.push({ ...product, isFavorite: true })
      localStorage.setItem(this.favoritosKeyPrefix + usuarioId, JSON.stringify(favoritos))
    }
  }

  remover(productId: number): void {
    const usuarioId = this.getUsuarioId()
    if (!usuarioId) return

    let favoritos = this.listar()
    favoritos = favoritos.filter((p) => Number(p.id) !== Number(productId))

    localStorage.setItem(this.favoritosKeyPrefix + usuarioId, JSON.stringify(favoritos))
    console.log("Produto removido dos favoritos:", productId)
  }

  isFavorito(productId: number): boolean {
    const favoritos = this.listar()
    return favoritos.some((p) => p.id === productId)
  }
}
