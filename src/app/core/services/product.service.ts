import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable, of } from "rxjs"
import { catchError } from "rxjs/operators"
import { Product } from "../../services/types/product" // Importar a interface Product do local correto

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly API = "http://localhost:3000/products"

  constructor(private http: HttpClient) { }

  // Método para compatibilidade com código existente
  // Este método agora retorna dados do servidor em vez de dados estáticos
  getAllProducts(): Product[] {
    // Este método não deve mais ser usado, use getProducts() em vez disso
    console.warn("getAllProducts() está obsoleto. Use getProducts() para obter dados do servidor.")
    return []
  }

  // Novo método para obter produtos do servidor
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API).pipe(
      catchError((error) => {
        console.error("Erro ao buscar produtos:", error)
        return of([])
      }),
    )
  }

  // No método getProductById, alterar o tipo do parâmetro
  getProductById(id: number): Observable<Product | null> {
    return this.http.get<Product>(`${this.API}/${id}`).pipe(
      catchError((error) => {
        console.error(`Erro ao buscar produto com ID ${id}:`, error)
        return of(null)
      }),
    )
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API, product)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product)
  }

  // No método deleteProduct, alterar o tipo do parâmetro
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
