import { Component, OnInit } from '@angular/core';
import { Customer } from '../../services/types/customers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-custumers-edit',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './custumers-edit.component.html',
  styleUrl: './custumers-edit.component.scss'
})
export class CustumersEditComponent implements OnInit {
  customer: Customer = {} as Customer;

  ngOnInit() {
    const dadosSalvos = localStorage.getItem('usuarioLogado');
    if (dadosSalvos) {
      this.customer = JSON.parse(dadosSalvos);
    }
  }

  salvarEdicao() {
    localStorage.setItem('usuarioLogado', JSON.stringify(this.customer));
    alert('Dados atualizados com sucesso!');
  }
}
