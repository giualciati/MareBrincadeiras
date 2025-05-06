import { Component, OnInit } from '@angular/core';
import { Customer } from '../../services/types/customers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ToastModule } from 'primeng/toast'; 
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custumers-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent,ToastModule],
  templateUrl: './custumers-edit.component.html',
  styleUrl: './custumers-edit.component.scss',
  providers: [MessageService]
})
export class CustumersEditComponent implements OnInit {
  customer: Customer = {} as Customer;

   constructor(
        private router: Router,
        private messageService: MessageService 
      ){}

  ngOnInit() {
    const dadosSalvos = localStorage.getItem('usuarioLogado');
    if (dadosSalvos) {
      this.customer = JSON.parse(dadosSalvos);
    }
  }

  salvarEdicao() {
    localStorage.setItem('usuarioLogado', JSON.stringify(this.customer));
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Dados atualizados com sucesso!',
      life: 3000
    });
    setTimeout(() => {
      this.router.navigate(['/information']);
    }, 2000)
  }
  cancelar() {
    this.router.navigate(['/information'])
  }     
}
