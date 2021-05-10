import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from './cliente.service';
import { Cliente } from './model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente!: Observable<Cliente[]>;

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.listarCliente();
  }

  listarCliente(){
    this.cliente = this.clienteService.getClienteList();
 }

 deletarCliente(id: any){
  this.clienteService.deleteCliente(id)
  .subscribe(
     data =>{
       console.log(data)
       this.listarCliente();
     }, 
     error => console.log(error)
  );

    }
  
    clienteDetails(id: any){
      this.router.navigate(['detailsCliente/',id])
    }
    
    updatecliente(id: any){
      this.router.navigate(['updateCliente/',id])
    }
    

}
