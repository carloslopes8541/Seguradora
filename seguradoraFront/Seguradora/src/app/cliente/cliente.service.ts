import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8080/api/cliente'

  constructor(
    private http: HttpClient
  ) { }

  getClienteList(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}`);
  }

  getCliente(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCliente(cliente: object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, cliente);
  }

  updateCliente(value: any): Observable<Object>{

    return this.http.put(`${this.baseUrl}`, value);

  }

  deleteCliente(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});

  }

}
