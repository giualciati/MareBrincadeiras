import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from '../app.component';
import { CadastroUsuarioComponent } from '../pages/cadastro-usuario/cadastro-usuario.component';  

@NgModule({
  declarations: [
    AppComponent,  
    CadastroUsuarioComponent  
  ],
  imports: [
    BrowserModule,  
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
