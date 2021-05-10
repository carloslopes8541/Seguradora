import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApoliceService {

  private baseUrl = 'http://localhost:8080/api/apolice'

  constructor(
    private http: HttpClient
  ) { }

  getApoliceList(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}`);
  }

  getApolice(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createApolice(apolice: object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, apolice);
  }

  updateApolice(value: any): Observable<Object>{

    return this.http.put(`${this.baseUrl}`, value);

  }

  deleteApolice(id:number): Observable<any>{

    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});

  }


}
