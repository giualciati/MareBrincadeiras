import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component'; 

@Component({
  standalone: true,
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
  imports: [
    CommonModule,
    HeaderComponent
  ]
})
export class EnderecoComponent implements OnInit {
  enderecos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const dados = localStorage.getItem('endereco');
    this.enderecos = dados ? JSON.parse(dados) : [];
  }

  irParaFormulario(): void {
    this.router.navigate(['/endereco-form']);
  }

  voltar(): void {
    this.router.navigate(['/']); 
  }
}
