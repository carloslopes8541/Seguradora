import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApoliceService } from './apolice.service';
import { Apolice } from './model/apolice';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {

  apolices!: Observable<Apolice[]>;

  constructor(
    private router: Router,
    private apoliceService: ApoliceService
  ) { }

  ngOnInit(): void {
    this.listarApolice();
  }

  listarApolice(){
    this.apolices = this.apoliceService.getApoliceList();
 }

 deleteApolice(numeroApolice: any){
  this.apoliceService.deleteApolice(numeroApolice)
  .subscribe(
     data =>{
       console.log(data)
       this.listarApolice();
     }, 
     error => console.log(error)
  );
}

apoliceDetails(numeroApolice: any){
  this.router.navigate(['details',numeroApolice])
}

updateApolice(numeroApolice: any){
  this.router.navigate(['update',numeroApolice])
}

}
