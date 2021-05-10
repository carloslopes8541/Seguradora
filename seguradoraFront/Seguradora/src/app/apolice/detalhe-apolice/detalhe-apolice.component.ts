import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApoliceService } from '../apolice.service';
import { Apolice } from '../model/apolice';

@Component({
  selector: 'app-detalhe-apolice',
  templateUrl: './detalhe-apolice.component.html',
  styleUrls: ['./detalhe-apolice.component.css']
})
export class DetalheApoliceComponent implements OnInit {

  id!: number;
  apolice!: Apolice;


  constructor(private route: ActivatedRoute,private router: Router,
    private apoliceService: ApoliceService) { }

  ngOnInit(){

    this.apolice = new Apolice();

    this.id = this.route.snapshot.params['id'];
    
    this.apoliceService.getApolice(this.id)
      .subscribe(data => {
        console.log(data)
        this.apolice = data;
      }, error => console.log(error));
  }

  listar(){
    this.router.navigate(['apoliceList']);
  }

}
