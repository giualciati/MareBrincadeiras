import { Component } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";

@Component({
  selector: 'app-collaborators',
  standalone: true,
  imports: [SidebarManagementComponent],
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.scss'
})
export class CollaboratorsComponent {
novoRegistro() {
throw new Error('Method not implemented.');
}

}
