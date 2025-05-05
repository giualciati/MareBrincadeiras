import { Component } from '@angular/core';
import { Customer } from '../../services/types/customers';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent{
    customer: Customer = {} as Customer; 

    constructor(
      private service: CustomersService,
      private router: Router,
      private route: ActivatedRoute,
    ){}

    novoCliente(){
      this.service.cadastroCliente(this.customer).subscribe(() => {
        alert("Cliente Cadastrado");
      })
    }
}
