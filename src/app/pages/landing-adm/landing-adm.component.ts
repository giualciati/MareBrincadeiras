import { Component } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";

@Component({
  selector: 'app-landing-adm',
  standalone: true,
  imports: [SidebarManagementComponent],
  templateUrl: './landing-adm.component.html',
  styleUrl: './landing-adm.component.scss'
})
export class LandingAdmComponent {

}
