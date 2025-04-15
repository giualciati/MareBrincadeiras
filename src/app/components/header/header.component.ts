import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { NgClass } from "@angular/common"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isMenuOpen = false
  cartCount = 1

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}