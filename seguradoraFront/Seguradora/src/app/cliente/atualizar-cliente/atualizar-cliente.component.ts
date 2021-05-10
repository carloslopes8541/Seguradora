import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})
export class AtualizarClienteComponent implements OnInit {

  id!:number;
  cliente!: Cliente;
  submitted!: false;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.cliente= new Cliente();
    
    this.id = this.route.snapshot.params['id'];

    this.clienteService.getCliente(this.id)
    .subscribe( data =>{
      console.log(data);
      this.cliente = data;
    }, error => console.log(error)
    );
  }

  updateCliente(){
    this.clienteService.updateCliente(this.cliente)
    .subscribe(data =>{
      console.log(data);
    }, error => console.log(error)
    );
    this.cliente= new Cliente();
    this.listar();
  }

  onSubmit(){
    this.updateCliente();
  }

  listar(){
    this.router.navigate(['/clienteList'])
  }

}
