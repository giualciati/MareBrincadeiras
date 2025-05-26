import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterCardService } from '../../services/registerCard.service';
import { Card } from '../../services/types/registerCard';

@Component({
  selector: 'app-cards-user',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CommonModule],
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.scss']
})
export class CardsUserComponent {
  listarCards: Card[] = [];
  constructor(private service: RegisterCardService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((cards: Card[]) => {
      this.listarCards = cards;
    });
  }

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }
}
