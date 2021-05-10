import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApoliceService } from '../apolice.service';
import { Apolice } from '../model/apolice';

@Component({
  selector: 'app-cadastro-apolice',
  templateUrl: './cadastro-apolice.component.html',
  styleUrls: ['./cadastro-apolice.component.css']
})
export class CadastroApoliceComponent implements OnInit {

  apolice: Apolice = new Apolice();
  submitted = false;

  constructor(
    private router: Router,
    private apoliceService: ApoliceService
  ) { }

  ngOnInit(): void {
  }

  newApolice(): void{
    this.submitted = false;
    this.apolice = new Apolice();
 }

 onSubmit(){
  this.submitted = true;
  this.save();
}

 save(){
  this.apoliceService.createApolice(this.apolice)
  .subscribe(data => console.log(data),
  error => console.log(error));
  this.apolice = new Apolice();
  this.listaApolice();
}

listaApolice(){
  this.router.navigate(['/apoliceList'])
}




}
