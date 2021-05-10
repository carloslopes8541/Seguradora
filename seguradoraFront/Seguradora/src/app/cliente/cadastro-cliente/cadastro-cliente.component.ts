import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }

  newCliente(): void{
    this.submitted = false;
    this.cliente = new Cliente();
 }

 onSubmit(){
  this.submitted = true;
  this.save();
}

 save(){
  this.clienteService.createCliente(this.cliente)
  .subscribe(data => console.log(data),
  error => console.log(error));
  this.cliente = new Cliente();
  this.listaCliente();
}

listaCliente(){
  this.router.navigate(['/clienteList'])
}

}
