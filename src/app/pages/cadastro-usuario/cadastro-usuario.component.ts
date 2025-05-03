import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroUsuarioService } from '../../services/cadastro-usuario.service';
import { Usuario } from '../../services/usuario.model';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']  

})

export class CadastroUsuarioComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroUsuarioService
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const usuario: Usuario = this.cadastroForm.value;

      this.cadastroService.cadastrar(usuario).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.cadastroForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('Ocorreu um erro ao cadastrar o usuário.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}

