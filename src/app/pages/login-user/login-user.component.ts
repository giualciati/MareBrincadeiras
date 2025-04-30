import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent {

  constructor(private router: Router) { }

  onLogin() {
    
    this.router.navigate(['/cadastro-usuario']);  
  }

}
