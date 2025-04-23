import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './login-adm.component.html',
  styleUrl: './login-adm.component.scss'
})
export class LoginAdmComponent {
  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  botaoDesabilitado: boolean = true;
  constructor(private router: RouterLink) { }

  onBotaoClicado() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {

      if (this.login == 'admin' && this.senha == '123') {
        alert(`Bem-vindo ${this.login} !`)
        //this.router.navigate(['/productList'])
      } else {
        alert(`Dados Inválidos`)
      }
    }
    else {
      alert(`Preencha ambos os campos!`)
    }
  }
}
