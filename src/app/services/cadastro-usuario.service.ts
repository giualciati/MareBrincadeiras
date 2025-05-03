
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../services/usuario.model';


import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {

    private apiUrl = 'http://localhost:3000/usuarios';

    constructor(private http: HttpClient) {}
  
    cadastrar(usuario: Usuario): Observable<any> {
      return this.http.post(this.apiUrl, usuario);
  }
}
