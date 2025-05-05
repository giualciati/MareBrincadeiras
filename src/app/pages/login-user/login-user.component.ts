import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from '../../services/types/login';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent {
  login: Login = { email: '', password: '' };

  constructor(
    private service : CustomersService,
    private router: Router) { }

    fazerLogin() {
      this.service.loginCliente(this.login.email, this.login.password).subscribe({
        next: (customer) => {
          if (customer) {
            alert(`Bem-vindo, ${customer.name}!`);
            localStorage.setItem('usuarioLogado', JSON.stringify(customer));
            this.router.navigate(['/information']);
          } else {
            alert('E-mail ou senha inválidos');
          }
        },
        error: () => {
          alert('Erro ao tentar fazer login.');
        }
      });
    }
    

  onLogin() {
    
    this.router.navigate(['/cadastro-usuario']);  
  }

}
