import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"

@Component({
  selector: "app-terms-of-use",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: "./terms-of-use.component.html",
  styleUrls: ["./terms-of-use.component.scss"],
})
export class TermsOfUseComponent {
  lastUpdate = "10 de abril de 2025"
}