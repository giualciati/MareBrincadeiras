import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Product } from '../../services/types/product';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';  
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-card-manager',
  standalone: true,
  imports: [CommonModule, ToastModule], 
  templateUrl: './product-card-manager.component.html',
  styleUrls: ['./product-card-manager.component.scss'],
  providers: [MessageService]
})
export class ProductCardManagerComponent {
  @Input() products: Product[] = [];
  @Input() categories: any[] = [];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

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

    this.productService.excluirProduto(id).subscribe({
      next: () => {
        this.products = this.products.filter(product => product.id !== id);
        this.messageService.add({
          severity: 'success',
          summary: 'Excluído',
          detail: 'Produto excluído com sucesso!',
          life: 3000
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao excluir o produto.',
          life: 3000
        });
      }
    });
  }
}
