import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarFerramentaComponent } from './core/ferramenta/cadastrar-ferramenta/cadastrar-ferramenta.component';
import { ListaFerramentaComponent } from './core/ferramenta/lista-ferramenta/lista-ferramenta.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonDangerComponent } from './shared/button/button-danger/button-danger.component';
import { ButtonSuccessComponent } from './shared/button/button-success/button-success.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './shared/content/content.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListaFuncionarioComponent } from './core/funcionario/lista-funcionario/lista-funcionario.component';
import { ListaEmprestimoComponent } from './core/emprestimo/lista-emprestimo/lista-emprestimo.component';
import { CadastrarEmprestimoComponent } from './core/emprestimo/cadastrar-emprestimo/cadastrar-emprestimo.component';
import { CadastrarFuncionarioComponent } from './core/funcionario/lista-funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { RouterModule } from '@angular/router';
import { ButtonWarningComponent } from './shared/button/button-warning/button-warning.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ButtonDangerComponent,
    ButtonSuccessComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    ListaFuncionarioComponent,
    ListaEmprestimoComponent,
    CadastrarEmprestimoComponent,
    CadastrarFuncionarioComponent,
    ButtonWarningComponent
  ],
  imports: [
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'lista-emprestimo',
        component: ListaEmprestimoComponent 
      },
      {
        path: 'cadastrar-emprestimo', 
        component: CadastrarEmprestimoComponent
      },
      { 
        path: 'lista-funcionario',
        component: ListaFuncionarioComponent
      },
      {
        path: 'cadastrar-funcionario',
        component: CadastrarFuncionarioComponent
      },
      {
        path: 'lista-ferramenta',
        component: ListaFerramentaComponent
      },
      {
        path: 'cadastrar-ferramenta',
        component: CadastrarFerramentaComponent
      },
      {
        path: 'cadastrar-emprestimo/:id',
        component: CadastrarEmprestimoComponent
      }
    ])
      
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
