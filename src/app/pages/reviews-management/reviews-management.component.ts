import { Component, OnInit } from '@angular/core';
import { AvaliacoesService } from '../../services/avaliacoes.service';
import { Avaliacao } from '../../services/types/avaliacoes';
import { SidebarManagementComponent } from '../../components/sidebar-management/sidebar-management.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews-management',
  standalone: true,
  imports: [CommonModule, SidebarManagementComponent],
  templateUrl: './reviews-management.component.html',
  styleUrls: ['./reviews-management.component.scss']
})
export class ReviewsManagementComponent implements OnInit {
  reviews: Avaliacao[] = [];

  constructor(private avaliacoesService: AvaliacoesService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.avaliacoesService.listar().subscribe({
      next: (data) => {
        this.reviews = data;
      },
      error: (error) => {
        console.error('Erro ao carregar avaliações:', error);
      }
    });
  }

  deleteReview(id: number): void {
    if (confirm('Deseja realmente excluir essa avaliação?')) {
      this.avaliacoesService.excluir(id).subscribe({
        next: () => {
          this.loadReviews(); // Atualiza após exclusão
        },
        error: (error) => {
          console.error('Erro ao excluir:', error);
        }
      });
    }
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

