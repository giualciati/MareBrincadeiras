import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../services/types/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card-manager',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-card-manager.component.html',
  styleUrls: ['./product-card-manager.component.scss']
})
export class ProductCardManagerComponent {
  @Input() products: Product[] = [];
  @Input() categories: any [] = [];

  constructor(private productService : ProductService) {}

  getCategoryName(categoryId: number, categories: any[]): string {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.nome : 'Categoria desconhecida';
  }

  editarProduto(id: number): void {
    console.log('Editando produto com ID:', id);
    window.location.href = `/product/edit/${id}`;
  }

  

  deletarProduto(id: number): void {
    if (!id) return;

    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.productService.excluirProduto(id).subscribe({
        next: () => {
          console.log('Produto excluído com sucesso');
          this.products = this.products.filter(product => product.id !== id); 
        },
        error: (error) => {
          console.error('Erro ao excluir produto:', error);
        }
      });
    }
  }
}