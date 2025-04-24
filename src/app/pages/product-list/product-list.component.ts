import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";
import { ProductCardManagerComponent } from "../../components/product-card-manager/product-card-manager.component";



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ SidebarManagementComponent, ProductCardManagerComponent ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})export class ProductListComponent {
  
}