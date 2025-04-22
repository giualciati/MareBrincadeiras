import { Component } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterLinkActive, NgClass, SidebarManagementComponent],
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss'],
})
export class CategoryManagementComponent {
  categorias = ['Bonecas', 'Carrinhos', 'Pelúcias', 'Montessori', 'Jogos de tabuleiro', 'Lego'];
  draggedCategoria: string | null = null;

  criarCategoria() {
    alert('Criar nova categoria');
  }

  onDragStart(event: DragEvent, categoria: string) {
    this.draggedCategoria = categoria;
    (event.target as HTMLElement)?.classList.add('dragging');
    event.dataTransfer?.setData('text/plain', categoria);
  }

  onDragEnd(event: DragEvent) {
    this.draggedCategoria = null;
    document.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); 
  }

  onDrop(event: DragEvent, categoriaAlvo: string) {
    event.preventDefault();

    if (this.draggedCategoria && this.draggedCategoria !== categoriaAlvo) {
      const indexDragged = this.categorias.indexOf(this.draggedCategoria);
      const indexAlvo = this.categorias.indexOf(categoriaAlvo);

      if (indexDragged > -1 && indexAlvo > -1) {
        const novaLista = [...this.categorias];
        novaLista.splice(indexDragged, 1);
        novaLista.splice(indexAlvo, 0, this.draggedCategoria);
        this.categorias = novaLista;
      }
    }
  }
}