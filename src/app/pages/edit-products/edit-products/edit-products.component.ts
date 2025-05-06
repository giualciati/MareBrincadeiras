import { Component, OnInit } from '@angular/core';
import { Product } from '../../../services/types/product';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service'; 
import { categorias } from '../../../services/types/types'; 
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarManagementComponent } from '../../../components/sidebar-management/sidebar-management.component';
import { MessageService } from 'primeng/api';  
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-edit-products',
  standalone: true,
  imports: [SidebarManagementComponent, FormsModule, CommonModule, ToastModule],
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.scss',
  providers: [MessageService]
})
export class EditProductsComponent implements OnInit {
  productID: number | null = null; 
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
    this.productID = this.route.snapshot.params['id'];

    if (this.productID) {
      this.service.buscarPorId(this.productID).subscribe(product => {
        this.product = product;
      
        this.otherImagePreviews = product.images || [];
        while (this.otherImagePreviews.length < 3) {
          this.otherImagePreviews.push('');
        }

        this.otherImages = [null, null, null]; 
      
      });
    }

    this.categoryService.listar().subscribe((categories) => {
      this.categories = categories;
    });

  }

  salvarEdicao(): void {
  if (!this.product.id) return;

  this.product.images = this.otherImagePreviews.filter(img => !!img);

  this.service.editarProduto(this.product).subscribe(() => {
    
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Produto cadastrado com sucesso!',
        life: 3000
      });
      setTimeout(() => {
        this.router.navigate(['/products/list']);
      }, 3000);
    },
   );
}
  cancelar(): void {
    this.router.navigate(['/products/list']);
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
