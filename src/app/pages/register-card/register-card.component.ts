import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RegisterCardService } from '../../services/register-card.service';


@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.scss'
})
export class RegisterCardComponent implements OnInit{

  formCard: any = {} 
  endereco : any = {}

  constructor(private registerCard:RegisterCardService){}

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
            addressNumberCob : '',
            complementCob: ''
      }
  }

  bucarEnderecoPorCep(){
    const cep = this.formCard.cepCob;
    if(cep && cep.length === 8){
      this.registerCard.buscarCep(cep).subscribe({
        next: (data)=> {
          this.formCard.stateCob = data.uf;
          this.formCard.cityCob = data.localidade;
          this.formCard.addressCob = data.logradouro;
        },
        error: (error) => {
          console.error('Erro ao buscar endereço', error);
        }
      }
      )
    }
  }

  enviarDadosCartao(){
    this.registerCard.cadastrarCartao(this.formCard).subscribe({
      next: (response) => {
        console.log('Cartão cadastrado com sucesso:', response);

      },
      error: (error) => {
        console.error('Erro ao cadastrar cartão:', error);
      }
    });

  }

  formatCardNumberInput() {
    this.formCard.numCard = this.formCard.numCard.replace(/\D/g, '') // Remove não-dígitos
      .replace(/(\d{4})(?=\d)/g, '$1 '); // Adiciona espaço a cada 4 dígitos
  }

  formatExpirationDateInput() {
    let value = this.formCard.expirationDate.replace(/\D/g, ''); 
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else if (value.length > 2) {
      value = value.substring(0, 2);
    }
    this.formCard.expirationDate = value;
  }

}
