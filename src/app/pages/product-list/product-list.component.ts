import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardManagerComponent } from "../../components/product-card-manager/product-card-manager.component";
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

import { categorias } from '../../services/types/types';
import { Product } from '../../services/types/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ SidebarManagementComponent, ProductCardManagerComponent ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productCard: Product[] = [];
  categories: categorias[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.productService.listarProduto().subscribe((products) => {
      this.productCard = products;
    });

    
    this.categoryService.listar().subscribe((categories) => {
      this.categories = categories;
    });
  }

  editarProduto(id: number): void {
    this.router.navigate(['/editar-produto', id]);
  }

  deletarProduto(id: number): void {
    console.log('Excluir produto com ID:', id);
  }

 
  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.nome : 'Categoria desconhecida';
  }
  
}
