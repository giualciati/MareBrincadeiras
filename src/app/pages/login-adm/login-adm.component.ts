import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-adm.component.html',
  styleUrl: './login-adm.component.scss'
})
export class LoginAdmComponent {
  login = '';
  senha = '';
  botaoDesabilitado: boolean = true;
  constructor(private router: Router) { }

  onBotaoClicado() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      console.log('Login:', this.login);
      console.log('Senha:', this.senha);
      if (this.login == 'admin' && this.senha == '123') {
        alert(`Bem-vindo ${this.login} !`)
        this.router.navigate(['landing/adm'])
      } else {
        alert(`Dados Inválidos`)
      }
    }
    else {
      alert(`Preencha ambos os campos!`)
    }
  }
}
