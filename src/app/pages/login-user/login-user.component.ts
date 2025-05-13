import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from '../../services/types/login';
import { ToastModule } from 'primeng/toast'; 
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss',
  providers: [MessageService]

})
export class LoginUserComponent {
  login: Login = { email: '', password: '' };

  constructor(
    private service : CustomersService,
    private router: Router,
    private messageService: MessageService 
  ) { }

  fazerLogin() {
    this.service.loginCliente(this.login.email, this.login.password).subscribe({
      next: (customer) => {
        if (customer) {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: `Bem-vindo, ${customer.name}!`,
            life: 1000
          });
          this.service.setUsuarioLogado(customer);
          this.service.atualizarUsuarioLogado(customer);
          setTimeout(() => {
            this.router.navigate(['/information']);
          }, 2000);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'E-mail ou senha inválidos',
            life: 3000
          });
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao tentar fazer login.',
          life: 3000
        });
      }
    });
  }
     
     onLogin() {
    this.router.navigate(['/customers']);  
  }

}
