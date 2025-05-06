import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  brinquedos: any[] | undefined;

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.brinquedos = this.favoritosService.getFavoritos();
  }
}
