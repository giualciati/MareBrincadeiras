import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"
import { ToastModule } from "primeng/toast"
import { MessageService } from "primeng/api"

@Component({
  selector: "app-forget-password-user",
  standalone: true,
  imports: [FormsModule, CommonModule, ToastModule],
  templateUrl: "./forget-password-user.component.html",
  styleUrls: ["./forget-password-user.component.scss"],
  providers: [MessageService],
})
export class ForgetPasswordUserComponent {
  email = ""

  constructor(
    private router: Router,
    private messageService: MessageService,
  ) {}

  enviarRedefinicao() {
    if (!this.email) {
      this.messageService.add({
        severity: "warn",
        summary: "Campo obrigatório",
        detail: "Por favor, informe seu e-mail cadastrado.",
        life: 3000,
      })
      return
    }

    this.messageService.add({
      severity: "success",
      summary: "E-mail enviado",
      detail: "Enviamos um link de redefinição de senha para o seu e-mail.",
      life: 3000,
    })

    setTimeout(() => {
      this.router.navigate(["/login/user"])
    }, 3000)
  }

  voltarLogin() {
    this.router.navigate(["/login/user"])
  }
}
