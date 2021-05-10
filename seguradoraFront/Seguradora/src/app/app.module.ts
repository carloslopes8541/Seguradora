import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { CadastroApoliceComponent } from './apolice/cadastro-apolice/cadastro-apolice.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ApoliceService } from './apolice/apolice.service';
import { ClienteService } from './cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AtualizarApoliceComponent } from './apolice/atualizar-apolice/atualizar-apolice.component';
import { DetalheApoliceComponent } from './apolice/detalhe-apolice/detalhe-apolice.component';
import { DetalheClienteComponent } from './cliente/detalhe-cliente/detalhe-cliente.component';
import { AtualizarClienteComponent } from './cliente/atualizar-cliente/atualizar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ApoliceComponent,
    CadastroApoliceComponent,
    CadastroClienteComponent,
    AtualizarApoliceComponent,
    DetalheApoliceComponent,
    DetalheClienteComponent,
    AtualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApoliceService,ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
