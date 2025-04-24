import { Component } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";


@Component({
  selector: 'app-product-registration',
  standalone: true,
  imports: [SidebarManagementComponent],
  templateUrl: './product-registration.component.html',
  styleUrl: './product-registration.component.scss'
})
export class ProductRegistrationComponent {

}
