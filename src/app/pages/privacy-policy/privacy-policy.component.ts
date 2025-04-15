import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "../../components/header/header.component"
import { FooterComponent } from "../../components/footer/footer.component"

@Component({
  selector: "app-privacy-policy",
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: "./privacy-policy.component.html",
  styleUrls: ["./privacy-policy.component.scss"],
})
export class PrivacyPolicyComponent {
  lastUpdate = "10 de abril de 2024"
}
