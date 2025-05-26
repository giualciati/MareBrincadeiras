import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { NgClass, NgIf, CommonModule } from "@angular/common";
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, NgIf, CommonModule, NgClass],
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  cartCount = 1;
  usuarioNome: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router  
  ) {}

  ngOnInit() {
    const usuario = this.authService.getUsuarioLogado();
    if (usuario && usuario.name) {
      this.usuarioNome = usuario.name;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.usuarioNome = null;
    this.router.navigate(['/']); 
  }
}