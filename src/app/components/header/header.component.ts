import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { NgClass, NgIf, CommonModule } from "@angular/common";
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, NgIf, CommonModule, NgClass],
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  cartCount = 0;
  usuarioNome: string | null = null;

  private cartSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    const usuario = this.authService.getUsuarioLogado();
    if (usuario && usuario.name) {
      this.usuarioNome = usuario.name;
    }

    this.cartSubscription = this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.usuarioNome = null;
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}