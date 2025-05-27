import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterCardService } from '../../services/registerCard.service';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, HeaderComponent],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.scss'
})
export class RegisterCardComponent implements OnInit {

  formCard: any = {};
  endereco: any = {};
  mensagemFeedback: string = '';
  tipoFeedback: 'sucesso' | 'erro' | '' = '';

  constructor(private registerCard: RegisterCardService, private router: Router) { }

  ngOnInit(): void {
    this.formCard = {
      numCard: '',
      cvv: '',
      expirationDate: '',
      nameCard: '',
      cepCob: '',
      stateCob: '',
      cityCob: '',
      addressCob: '',
      addressNumberCob: '',
      complementCob: ''
    };
  }

  enviarDadosCartao() {
    if (!this.validarFormulario()) {
      this.mensagemFeedback = 'Preencha todos os campos';
      this.tipoFeedback = 'erro';
      return;
    }

    this.registerCard.cadastrarCartao(this.formCard).subscribe({
      next: (response) => {
        this.mensagemFeedback = 'Cartão adicionado';
        this.tipoFeedback = 'sucesso';
        setTimeout(() => {
          this.router.navigate(['/information/cards']);
        }, 1500);
      },
      error: (error) => {
        console.error('Erro ao cadastrar cartão:', error);
        this.mensagemFeedback = 'Erro ao adicionar cartão';
        this.tipoFeedback = 'erro';
        this.limparFeedbackDepoisDeTempo();
      }
    });
  }

  limparFormulario(): void {
    this.formCard = {
      numCard: '',
      cvv: '',
      expirationDate: '',
      nameCard: '',
      cepCob: '',
      stateCob: '',
      cityCob: '',
      addressCob: '',
      addressNumberCob: '',
      complementCob: ''
    };
    this.mensagemFeedback = '';
    this.tipoFeedback = '';
  }


  validarFormulario(): boolean {
    const camposObrigatorios = [
      'numCard',
      'cvv',
      'expirationDate',
      'nameCard',
      'cepCob',
      'stateCob',
      'cityCob',
      'addressCob',
      'addressNumberCob'
    ];

    for (const campo of camposObrigatorios) {
      if (!this.formCard[campo] || this.formCard[campo].toString().trim() === '') {
        return false;
      }
    }

    return true;
  }

  bucarEnderecoPorCep() {
    const cep = this.formCard.cepCob;
    if (cep && cep.length === 8) {
      this.registerCard.buscarCep(cep).subscribe({
        next: (data) => {
          this.formCard.stateCob = data.uf;
          this.formCard.cityCob = data.localidade;
          this.formCard.addressCob = data.logradouro;
        },
        error: (error) => {
          console.error('Erro ao buscar endereço', error);
        }
      });
    }
  }

  formatCardNumberInput() {
    this.formCard.numCard = this.formCard.numCard.replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  formatExpirationDateInput() {
  let value = this.formCard.expirationDate.replace(/\D/g, '');

  if (value.length >= 3) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4);
  } else {
    value = value.substring(0, 2);
  }

  this.formCard.expirationDate = value;

  if (value.length === 5 && value.includes('/')) {
    const [monthStr, yearStr] = value.split('/');
    const month = parseInt(monthStr, 10);
    const year = parseInt('20' + yearStr, 10); 

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const isExpired =
      year < currentYear || (year === currentYear && month < currentMonth);

    if (isExpired) {
      this.mensagemFeedback = 'Digite uma data de validade válida';
      this.tipoFeedback = 'erro';
      this.limparFeedbackDepoisDeTempo();
      this.formCard.expirationDate = '';
    }
  }
}


  limparFeedbackDepoisDeTempo(): void {
    setTimeout(() => {
      this.mensagemFeedback = '';
      this.tipoFeedback = '';
    }, 3000);
  }
}
