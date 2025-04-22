import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-management',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-management.component.html',
  styleUrl: './sidebar-management.component.scss'
})
export class SidebarManagementComponent {

}
