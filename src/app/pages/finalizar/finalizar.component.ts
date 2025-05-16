import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-finalizar',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './finalizar.component.html',
  styleUrl: './finalizar.component.scss'
})
export class FinalizarComponent {
 
  
}


