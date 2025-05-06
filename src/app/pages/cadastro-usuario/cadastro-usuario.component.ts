import { Component } from '@angular/core';
import { Customer } from '../../services/types/customers';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast'; 
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss',
  providers: [MessageService]
})

export class CadastroUsuarioComponent{
    customer: Customer = {} as Customer; 

    constructor(
      private service: CustomersService,
      private router: Router,
      private route: ActivatedRoute,
      private messageService: MessageService 
    ){}

    novoCliente(){
      if(!this.customer.name|| !this.customer.email|| !this.customer.rg || 
        !this.customer.cpf || !this.customer.dateOfBirth || !this.customer.telephone|| 
        !this.customer.password){
          this.messageService.add({
            severity: 'warn',
            summary: 'Campos obrigatórios',
            detail: 'Por favor, preencha todos os campos obrigatórios.',
            life: 3000
          });
          return;
      }

        const hoje = new Date();
        const nascimento = new Date(this.customer.dateOfBirth);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
          idade--;
        }

        if (idade < 18) {
          this.messageService.add({
            severity: 'error',
            summary: 'Idade inválida',
            detail: 'Você precisa ter pelo menos 18 anos para se cadastrar.',
            life: 2000
          });
          return;
  }


      this.service.cadastroCliente(this.customer).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Cliente cadastrado com sucesso!',
          life: 3000
        });
        setTimeout(() => {
          this.router.navigate(['/login/user']);
        }, 2000);
      })
    }
}
