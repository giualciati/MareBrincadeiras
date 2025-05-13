import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { FavoritosService } from '../../favoritos.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  brinquedos: any[] | undefined;

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.brinquedos = this.favoritosService.getFavoritos();
  }
}

