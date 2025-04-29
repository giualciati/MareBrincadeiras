import { Component, OnInit } from '@angular/core';
import { SidebarManagementComponent } from "../../components/sidebar-management/sidebar-management.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { categorias } from '../../services/types/types';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-management',
  standalone: true,
  imports: [CommonModule, FormsModule,  SidebarManagementComponent],
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss'],
})
export class CategoryManagementComponent implements OnInit {
abrirMenu(categoria: categorias) {
  this.menuAbertoPara = this.menuAbertoPara === categoria.id ? null : categoria.id;
}
  listaCategorias: categorias[] = [];
  draggedCategoria: categorias | null = null;
  novaCategoriaEmCriacao = false;
  novaCategoriaNome = '';
  categoriaEditandoId: number | null = null;
  menuAbertoPara: number | null = null;
  inputRef: any;

  constructor(private service: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }
  

  carregarCategorias(): void {
    this.service.listar().subscribe((categorias) => {
      this.listaCategorias = categorias;
    });
  }

  // Criar categoria
  criarCategoria(): void {
    this.novaCategoriaEmCriacao = true;
    this.novaCategoriaNome = '';
  }

  salvarNovaCategoria(): void {
    const nome = this.novaCategoriaNome.trim();
    if (nome) {
      this.service.criarCategoria(nome).subscribe(() => {
        this.novaCategoriaEmCriacao = false;
        this.carregarCategorias();
      });
    }
  }

  // Editar categoria
  editarCategoria(categoria: categorias): void {
    this.categoriaEditandoId = categoria.id ?? null;
    this.menuAbertoPara = null;
  }

  salvarEdicao(categoria: categorias, novoNome: string): void {
    const nome = novoNome.trim();
    if (nome && categoria.id) {
      this.service.atualizarCategoria(categoria.id, nome).subscribe(() => {
        this.categoriaEditandoId = null;
        this.carregarCategorias();
      });
    } else {
      this.categoriaEditandoId = null;
    }
  }

  // Excluir categoria
  excluirCategoria(id: number): void {
    if (confirm('Deseja realmente excluir esta categoria?')) {
      this.service.excluirCategoria(id).subscribe(() => {
        this.carregarCategorias();
      });
    }
    this.menuAbertoPara = null;
  }


  // Drag and drop
  onDragStart(event: DragEvent, categoria: categorias): void {
    this.draggedCategoria = categoria;
    (event.target as HTMLElement)?.classList.add('dragging');
    event.dataTransfer?.setData('text/plain', categoria.nome);
  }

  onDragEnd(event: DragEvent): void {
    this.draggedCategoria = null;
    document.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, categoriaAlvo: categorias): void {
    event.preventDefault();

    if (this.draggedCategoria && this.draggedCategoria.id !== categoriaAlvo.id) {
      const indexDragged = this.listaCategorias.findIndex(c => c.id === this.draggedCategoria?.id);
      const indexAlvo = this.listaCategorias.findIndex(c => c.id === categoriaAlvo.id);

      if (indexDragged > -1 && indexAlvo > -1) {
        const novaLista = [...this.listaCategorias];
        const [item] = novaLista.splice(indexDragged, 1);
        novaLista.splice(indexAlvo, 0, item);
        this.listaCategorias = novaLista;
      }
    }
  }
}