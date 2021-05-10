import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApoliceComponent } from './apolice/apolice.component';
import { AtualizarApoliceComponent } from './apolice/atualizar-apolice/atualizar-apolice.component';
import { CadastroApoliceComponent } from './apolice/cadastro-apolice/cadastro-apolice.component';
import { DetalheApoliceComponent } from './apolice/detalhe-apolice/detalhe-apolice.component';
import { AtualizarClienteComponent } from './cliente/atualizar-cliente/atualizar-cliente.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DetalheClienteComponent } from './cliente/detalhe-cliente/detalhe-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'apolice', pathMatch: 'full' },
  { path: 'apoliceList', component: ApoliceComponent },
  { path: 'clienteList', component: ClienteComponent },
  { path: 'cadastrarApolice', component:  CadastroApoliceComponent},
  { path: 'cadastrarCliente', component:  CadastroClienteComponent},
  { path: 'update/:id', component: AtualizarApoliceComponent},
  { path: 'updateCliente/:id', component: AtualizarClienteComponent},
  { path: 'details/:id', component: DetalheApoliceComponent },
  { path: 'detailsCliente/:id', component: DetalheClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
