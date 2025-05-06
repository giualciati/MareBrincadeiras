import { Component } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";
import { Product } from '../../services/types/product';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service'; 
import { categorias } from '../../services/types/types'; 
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast'; 
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-registration',
  standalone: true,
  imports: [SidebarManagementComponent, FormsModule, CommonModule, ToastModule],
  templateUrl: './product-registration.component.html',
  styleUrl: './product-registration.component.scss',
  providers: [MessageService]
})
export class ProductRegistrationComponent {
  productID?: number;
  product: Product = {} as Product;
  categories: categorias[] = []; 

  otherImages: (File | null)[] = [null, null, null];  
  otherImagePreviews: string[] = ['', '', ''];        

  constructor(
    private service: ProductService,
    private categoryService: CategoryService, 
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService 
  ) {}

  ngOnInit(): void {
    this.categoryService.listar().subscribe((categories) => {
      this.categories = categories;
    });

    this.otherImagePreviews = ['', '', ''];
    this.otherImages = [null, null, null];
  }

  

  submeter() {
    this.product.images = this.otherImagePreviews.filter(img => !!img);

    if (!this.product.name || !this.product.value || !this.product.description || !this.product.categoryId ||
      !this.product.image || !this.product.color || !this.product.size || !this.product.quantity) {
     this.messageService.add({
       severity: 'warn',
       summary: 'Campos obrigatórios',
       detail: 'Por favor, preencha todos os campos obrigatórios.',
       life: 3000
     });
     return;
   }
  
    this.service.criarProduto(this.product).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Produto cadastrado com sucesso!',
          life: 3000
        });
        setTimeout(() => {
          this.router.navigate(['/products/list']);
        }, 1000);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao cadastrar o produto.',
          life: 3000
        });
      }
    });
  }
  
  cancelar(): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Cancelado',
      detail: 'Cadastro cancelado.',
      life: 2000
    });
    setTimeout(() => {
      this.router.navigate(['/products/list']);
    }, 2000);
  }
  

  imagemDestaque(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.product.image = e.target.result; 
      };
      reader.readAsDataURL(file);
    }
  }

  onSingleImageSelected(event: any, index: number): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.otherImagePreviews[index] = reader.result as string;
      this.otherImages[index] = file;
    };
    reader.readAsDataURL(file);
  }

  removerImagem(index: number): void {
    this.otherImagePreviews[index] = '';
    this.otherImages[index] = null;
  }
}
