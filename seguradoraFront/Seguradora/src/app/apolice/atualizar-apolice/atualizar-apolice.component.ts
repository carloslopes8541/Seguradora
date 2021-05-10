import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApoliceService } from '../apolice.service';
import { Apolice } from '../model/apolice';

@Component({
  selector: 'app-atualizar-apolice',
  templateUrl: './atualizar-apolice.component.html',
  styleUrls: ['./atualizar-apolice.component.css']
})
export class AtualizarApoliceComponent implements OnInit {

  id!:number;
  apolice!:Apolice;
  submitted!: false;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private apoliceService: ApoliceService
  ) { }

  ngOnInit(){
    this.apolice= new Apolice();
    
    this.id = this.route.snapshot.params['id'];

    this.apoliceService.getApolice(this.id)
    .subscribe( data =>{
      console.log(data);
      this.apolice = data;
    }, error => console.log(error)
    );
  }

  updateRoom(){
    this.apoliceService.updateApolice(this.apolice)
    .subscribe(data =>{
      console.log(data);
    }, error => console.log(error)
    );
    this.apolice= new Apolice();
    this.listar();
  }

  onSubmit(){
    this.updateRoom();
  }

  listar(){
    this.router.navigate(['/apoliceList'])
  }

}
