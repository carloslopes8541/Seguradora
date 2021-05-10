import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  id!: number;
  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute,private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(){

    this.cliente = new Cliente();

    this.id = this.route.snapshot.params['id'];
    
    this.clienteService.getCliente(this.id)
      .subscribe(data => {
        console.log(data)
        this.cliente = data;
      }, error => console.log(error));
  }

  listar(){
    this.router.navigate(['clienteList']);
  }

}
